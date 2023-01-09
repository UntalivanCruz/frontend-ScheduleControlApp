import { useEffect, useState } from 'react';
import {Table, Switch, Space} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ApiError,EmployeeWithRelations, EmployeeControllerService } from '../services/index'

const columns: ColumnsType<EmployeeWithRelations> = [
  {
    title: 'Identification',
    dataIndex: 'identification',
    key: 'identification',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    key: 'nationality',
  },
  {
    title: 'Positions',
    dataIndex: 'EmployeePositions',
    key: 'EmployeePositions',
    render: (_, {EmployeePositions} ) => (
      <>{ EmployeePositions?.name }</>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, { status }) => (
      <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" disabled={true} defaultChecked checked={status} />
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

export const Employee = () => {
  const [data, setData] = useState<EmployeeWithRelations[]>([]);
  const [error, setError] = useState<ApiError|null>();

useEffect(() => {
  EmployeeControllerService.employeeControllerFind(
    '{"include":[{"relation":"EmployeePositions"}]}'
  )
    .then((originData) => setData(originData))
    .catch((error) => setError(error));
}, []);
  return (
    <>
    <h1>Employee</h1>
    <Table columns={columns} dataSource={data} rowKey="id"/>
    {error}
    </>
  )
}