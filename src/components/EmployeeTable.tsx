import { Table, Switch, Space, Typography, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { EmployeeWithRelations, NewEmployee } from '../services'
import { EditEmployeeForm } from './EditEmployeeForm';

export const EmployeeTable = ({ data, HandleDelete, edit }: any) => {
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
      render: (_, { EmployeePositions }) => (
        <>{EmployeePositions?.name}</>
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
          <EditEmployeeForm HandleEdit={HandleEdit} data={record}/>
          <Popconfirm title="Sure to delete?" onConfirm={() => HandleDelete(record.id)} >
            <Typography.Link type="danger"><DeleteOutlined style={{ color: 'red' }} /> Delete</Typography.Link>
          </Popconfirm>
        </Space>
      )
    },
  ];

  const HandleEdit = (id: string, item: NewEmployee) => {
    edit(id, item)
  }
  return (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        rowKey="id"
        title={() => <h2 style={{ textAlign: 'center' }}>Employee</h2>}
        footer={() => <Typography.Text>Total records in the table: {data.length}</Typography.Text>} />
  )
}
