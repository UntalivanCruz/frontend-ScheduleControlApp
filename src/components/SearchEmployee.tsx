import React, { useState } from 'react';
import { Button, Form, Input, message, Space } from 'antd';
import { getEmployee } from '../helpers/getEmployee';

export const SearchEmployee = ({ newData }: any) => {
    const [form] = Form.useForm();
    const [inputValue, setInputValue] = useState('')

    const onInputValue = (e:any) => {
        setInputValue(e.target.value)
    }
    
    const onFinish = async() => {
        const newValue: string = inputValue.trim()
        if (newValue.length <= 1) return;
        const employee = await getEmployee(newValue)
        newData(employee)
        message.success('Submit success!');
        form.resetFields();
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    return (
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
                <Input placeholder="Input your identification number"  value={inputValue} onChange={onInputValue}/>
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}
