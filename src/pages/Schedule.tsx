import { useEffect, useState } from 'react';
import { Form, Table, Switch, Input, Typography, Popconfirm, Checkbox, message } from 'antd';
import { EditOutlined, SaveOutlined, StopOutlined, DeleteOutlined } from '@ant-design/icons';
import { ApiError, ScheduleWithRelations, ScheduleControllerService } from '../services/index'
import { weekday } from '../constants/weekDay';
import { timeFormat } from '../utils/time.format';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'text' | 'number' | 'boolean' | 'date' | 'time' | 'list';
  record: ScheduleWithRelations;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'text' ? <Input /> : <Checkbox />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};



export const Schedule = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<ScheduleWithRelations[]>([]);
  const [error, setError] = useState<ApiError | null>();
  const [idEditing, setIdEditing] = useState<String | undefined>('');

  const isEditing = (record: ScheduleWithRelations) => record.id === idEditing;

  const edit = (record: any) => {
    form.setFieldsValue({ idWorkshift: '', day: '', startTime: '', endTime: '', ...record });
    setIdEditing(record.id);
  };

  const deleteRow = (id: any) => {
    ScheduleControllerService.scheduleControllerUpdateById(id, { status: false })
      .then(() => {
        message.success('Delete success!');
        setData(data.map(x => {
          if (x.id === id) {
            return { ...x, status: false }
          } else {
            return x
          }
        }))
      })
      .catch((error) => {
        message.error('Delete failed!');
        setError(error)
      });
  }

  const cancel = () => {
    setIdEditing('');
  };


  const save = async (id: String | undefined) => {
    try {
      const row = (await form.validateFields()) as ScheduleWithRelations;

      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setIdEditing('');
        delete row['workshift']
        ScheduleControllerService.scheduleControllerUpdateById(String(item.id), row)
          .then(() => message.success('Update success!'))
          .catch((error) => {
            message.error('Update failed!');
            setError(error)
          });
      } else {
        newData.push(row);
        setData(newData);
        setIdEditing('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };


  const columns = [
    {
      title: 'Workshift',
      dataIndex: 'workshift',
      editable: false,
      inputType: 'text',
      render: (_: any, record: ScheduleWithRelations) => (
        <>{record.workshift?.name}</>
      ),
    },
    {
      title: 'Day',
      dataIndex: 'day',
      editable: true,
      inputType: 'text',
      render: (_: any, record: ScheduleWithRelations) => (
        <>{weekday[record.day]}</>
      ),
    },
    {
      title: 'StartTime',
      dataIndex: 'startTime',
      editable: true,
      inputType: 'text',
      render: (_: any, record: ScheduleWithRelations) => (
        <>{timeFormat(String(record.startTime))}</>
      ),
    },
    {
      title: 'EndTime',
      dataIndex: 'endTime',
      editable: true,
      inputType: 'text',
      render: (_: any, record: ScheduleWithRelations) => (
        <>{timeFormat(String(record.endTime))}</>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      inputType: 'boolean',
      render: (_: any, record: ScheduleWithRelations) => (
        <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" disabled={true} defaultChecked checked={record.status} />
      ),
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_: any, record: ScheduleWithRelations) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm title="Sure to save?" onConfirm={() => save(record.id)}>
              <SaveOutlined style={{ color: 'green', marginRight: 8 }} />
            </Popconfirm>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel} >
              <StopOutlined style={{ color: 'red' }} />
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link disabled={idEditing !== ''} onClick={() => edit(record)} style={{ marginRight: 8 }}>
              <EditOutlined /> Edit
            </Typography.Link>
            <Popconfirm disabled={idEditing !== ''} title="Sure to delete?" onConfirm={() => deleteRow(record.id)} >
              <Typography.Link disabled={idEditing !== ''} type="danger"><DeleteOutlined disabled={idEditing !== ''} style={{ color: 'red' }} /> Delete</Typography.Link>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    ScheduleControllerService.scheduleControllerFind(
      '{"include":[{"relation":"workshift"}]}'
    )
      .then((originData) => setData(originData))
      .catch((error) => setError(error));
  }, []);


  const mergedColumns = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: ScheduleWithRelations) => ({
        record,
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <h1>Schedule</h1>
      <Form
        form={form}
        component={false}
      >
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowKey="id"
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      {error}
    </>
  )
}
