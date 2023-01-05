import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';

export const Attendance = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const onFill = () => {
    form.setFieldsValue({
      identification: '123456',
    });
  };
  return (
    <>
    <div>Welcome!</div>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="identification"
        label="Identification"
        rules={[{ required: true }, { type: 'string', min: 6 }]}
      >
        <Input placeholder="input your identification number" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>
    </>
  )
}
