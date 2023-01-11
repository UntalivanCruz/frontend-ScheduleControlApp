import React, { useEffect, useState } from 'react'
import { DatePicker, Form, Input, Modal, Radio, Select, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { NewEmployee } from '../services';
import { getPositionEmployee, getNationality } from '../helpers';
import { DateFormat, DateFormatRange } from '../utils/TimeFormat';

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: NewEmployee) => void;
  onCancel: () => void;
}

export const EditEmployeeForm = ({ HandleEdit, data }: any) => {
  const [open, setOpen] = useState(false);
  const [dataPositions, setPositions] = useState<any>([]);
  const [dataNationality, setNationality] = useState<any>([]);

  const HandlePositions = async () => {
    const getData = await getPositionEmployee()
    const list = getData.map((item: any) => {
      return { "label": item.name, "value": item.id }
    })
    setPositions(list)
  }

  const HandleNationality = async () => {
    const getData = await getNationality()
    setNationality(getData)
  }

  useEffect(() => {
    HandlePositions()
    HandleNationality()
  }, []);


  const onCreate = (values: any) => {
    HandleEdit(data.id, { ...values, dateBirth: DateFormat(values.dateBirth) })
    setOpen(false);
  };

  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Edit employee"
        okText="Edit"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values: NewEmployee) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ ...data,dateBirth:DateFormatRange(data.dateBirth)}}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: 'Please input the first name of employee!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last  Name"
            rules={[{ required: true, message: 'Please input the last name of employee!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="identification"
            label="Identification"
            rules={[{ required: true, message: 'Please input the identification of employee!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dateBirth"
            label="DateBirth"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
          >
            <Radio.Group>
              <Radio value="M">Male</Radio>
              <Radio value="F">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            initialValue={"Honduras"}
            rules={[{ required: true, message: 'Please select the nationality of employee!' }]}
          >
            <Select
              options={dataNationality} showSearch placeholder="Select a nationality"
            />
          </Form.Item>
          <Form.Item
            name="idEmployeePositions"
            label="Positions"
          >
            <Select
              options={dataPositions} showSearch placeholder="Select a position"
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <><Typography.Link onClick={() => setOpen(true)} style={{ marginRight: 8 }}>
      <EditOutlined /> Edit
    </Typography.Link>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  )
}
