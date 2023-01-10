import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Select, TimePicker } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import { NewSchedule} from '../services';
import { weekday } from '../constants/weekDay';
import { getWorkshift } from '../helpers';
import { TimeFormatSave } from '../utils/TimeFormat';

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: NewSchedule) => void;
  onCancel: () => void;
}

export const AddScheduleForm = ({ HandleNew, edit }: any) => {
  const [open, setOpen] = useState(false);
  const [dataWorkshift,setWorkshift] = useState<any>([]);

const HandleWorkshift = async()=> {
  const getData = await getWorkshift()
  const list = getData.map((item)=>{
    return {"label":item.name,"value":item.id}
  })
  setWorkshift(list)
}
useEffect(() => {
  HandleWorkshift()
}, []);

  const onCreate = (values:any) => {
    HandleNew({ day:values.day,startTime:TimeFormatSave(values.range[0]),endTime:TimeFormatSave(values.range[1]),idWorkshift:values.idWorkshift})
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
        title="Create a new schedule"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values: NewSchedule) => {
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
        >
          <Form.Item
            name="day"
            label="Day"
            initialValue={1}
            rules={[{ required: true, message: 'Please input the day of schedule!' }]}
          >
            <Select
              options={weekday.map((day, index) => {
                return { "label": day, "value": index }
              })}
            />
          </Form.Item>
          <Form.Item label="Time" name="range">
            <TimePicker.RangePicker minuteStep={5} secondStep={15} />
          </Form.Item>
          <Form.Item
            name="idWorkshift"
            label="Workshift"
          >
            <Select
              options={dataWorkshift}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        <FileAddOutlined />Create new
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}

      />
    </div>

  );
};