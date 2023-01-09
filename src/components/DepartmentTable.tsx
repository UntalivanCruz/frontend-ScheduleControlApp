import { useEffect, useState } from 'react';
import { Form, Table, Switch, Input, Typography, Popconfirm, Checkbox, message, Button } from 'antd';
import { EditOutlined, SaveOutlined, StopOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons';
import { ApiError, DepartmentWithRelations, DepartmentControllerService } from '../services/index'

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'text' | 'number' | 'boolean';
    record: DepartmentWithRelations;
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
  

export const DepartmentTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState<DepartmentWithRelations[]>([]);
    const [error, setError] = useState<ApiError | null>();
    const [idEditing, setIdEditing] = useState<String | undefined>('');
  
    const isEditing = (record: DepartmentWithRelations) => record.id === idEditing;
  
    const edit = (record: any) => {
      form.setFieldsValue({ name: '', ...record });
      setIdEditing(record.id);
    };
  
    const deleteRow = (id: any) => {
      DepartmentControllerService.departmentControllerUpdateById(id, { status: false })
        .then(() => {
          message.success('Delete success!');
        setData(data.map(x=>{
            if(x.id === id){
              return {...x,status:false}
            }else{
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
        const row = (await form.validateFields()) as DepartmentWithRelations;
  
        const newData = [...data];
        const index = newData.findIndex((item) => id === item.id);
        if (index > -1) {
          const item = newData[index];
          DepartmentControllerService.departmentControllerUpdateById(String(item.id),row)
          .then(()=>message.success('Update success!'))
          .catch((error) => {
            message.error('Update failed!');
            setError(error)
          });
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          setData(newData);
          setIdEditing('');
        } else {
          console.log("no se cuando pasa esto",row)
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
        title: 'Name',
        dataIndex: 'name',
        inputType: 'text',
        editable: true,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        inputType: 'boolean',
        render: (_: any, record: DepartmentWithRelations) => (
          <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" disabled={true} defaultChecked checked={record.status} />
        ),
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        render: (_: any, record: DepartmentWithRelations) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Popconfirm title="Sure to save?" onConfirm={() => save(record.id)}>
                <SaveOutlined style={{ color: 'green',marginRight: 8 }}/>
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
      DepartmentControllerService.departmentControllerFind()
        .then((originData) => setData(originData))
        .catch((error) => setError(error));
    }, []);
  
    const mergedColumns = columns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DepartmentWithRelations) => ({
          record,
          inputType: col.inputType,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
  
    const handleAdd = () => {
      DepartmentControllerService.departmentControllerCreate({name: 'input the new department'})
      .then((newData)=>{
        message.success('Create success!')
        setData([...data, newData]);
      })
      .catch((error) => {
        message.error('Create failed!');
        setError(error)
      });
    };
  
    return (
      <>
        <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        <FileAddOutlined />Create new 
        </Button>
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
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
            }}
            title={() => <h2 style={{ textAlign: 'center' }}>Department</h2>}
            footer={() => <Typography.Text>Total records in the table: {data.length}</Typography.Text>}
          />
        </Form>
        {error}
      </>
    )
}
