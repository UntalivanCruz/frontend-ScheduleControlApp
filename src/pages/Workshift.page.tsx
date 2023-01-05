import { useEffect, useState } from 'react';
import {Table, Switch, Space} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ApiError,WorkshiftWithRelations, WorkshiftControllerService } from '../services/index'

const columns: ColumnsType<WorkshiftWithRelations> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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

export const Workshift = () => {
  const [data, setData] = useState<WorkshiftWithRelations[]>([]);
  const [error, setError] = useState<ApiError|null>();

useEffect(() => {
  WorkshiftControllerService.workshiftControllerFind()
    .then((originData) => setData(originData))
    .catch((error) => setError(error));
}, []);
  return (
    <>
    <h1>Workshift</h1>
    <Table columns={columns} dataSource={data} rowKey="id"/>
    {error}
    </>
  )
}
