import { useEffect, useState } from 'react';
import {Table, Switch, Space} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ApiError,ScheduleWithRelations, ScheduleControllerService} from '../services/index'

const columns: ColumnsType<ScheduleWithRelations> = [
  {
    title: 'Workshift',
    dataIndex: 'workshift',
    key: 'workshift',
    render: (_, {workshift} ) => (
      <>{ workshift?.name }</>
    ),
  },
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
  },
  {
    title: 'StartTime',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: 'EndTime',
    dataIndex: 'endTime',
    key: 'endTime',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    render: (_, { state }) => (
      <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" defaultChecked checked={state} />
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    )
  },
];

export const Schedule = () => {
  const [data, setData] = useState<ScheduleWithRelations[]>([]);
  const [error, setError] = useState<ApiError|null>();

useEffect(() => {
  ScheduleControllerService.scheduleControllerFind(
    '{"include":[{"relation":"workshift"}]}'
  )
    .then((originData) => setData(originData))
    .catch((error) => setError(error));
}, []);
  return (
    <>
      <h1>Deparment</h1>
      <Table columns={columns} dataSource={data} rowKey="id" />
      {error}
    </>
  )
}
