import { Popconfirm, Switch, Table, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table';
import { ScheduleWithRelations } from '../services';
import { weekday } from '../constants/weekDay';
import { TimeFormat } from '../utils/TimeFormat';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const ScheduleTable = ({ data, HandleDelete, edit }: any) => {
    const columns: ColumnsType<ScheduleWithRelations> = [
        {
            title: 'Workshift',
            dataIndex: 'workshift',
            key: 'workshift',
            render: (_, { workshift }) => (
                <>{workshift?.name}</>
            ),
        },
        {
            title: 'Day',
            dataIndex: 'day',
            key: 'day',
            render: (_, { day }) => (
                <>{weekday[day]}</>
            ),
        },
        {
            title: 'StartTime',
            dataIndex: 'startTime',
            key: 'startTime',
            render: (_, { startTime }) => (
                <>{TimeFormat(String(startTime))}</>
            ),
        },
        {
            title: 'EndTime',
            dataIndex: 'endTime',
            key: 'endTime',
            render: (_, { endTime }) => (
                <>{TimeFormat(String(endTime))}</>
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
                <>
                    <Typography.Link onClick={() => edit(record)} style={{ marginRight: 8 }}>
                        <EditOutlined /> Edit
                    </Typography.Link>
                    <Popconfirm title="Sure to delete?" onConfirm={() => HandleDelete(record.id)} >
                        <Typography.Link type="danger"><DeleteOutlined style={{ color: 'red' }} /> Delete</Typography.Link>
                    </Popconfirm>
                </>
            )
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            bordered
            rowKey="id"
            title={() => <h2 style={{ textAlign: 'center' }}>Schedule</h2>}
            footer={() => <Typography.Text>Total records in the table: {data.length}</Typography.Text>} />
    )
}
