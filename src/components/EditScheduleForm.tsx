import React, { useEffect, useState } from 'react';
import {  Form, Modal, Select, TimePicker, Typography } from 'antd';
import { EditOutlined, } from '@ant-design/icons';
import { NewSchedule } from '../services';
import { weekday } from '../constants/weekDay';
import { getWorkshift } from '../helpers';
import { TimeFormatSave, TimeFormatRange } from '../utils/TimeFormat';

interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: NewSchedule) => void;
    onCancel: () => void;
}

export const EditScheduleForm = ({ HandleEdit,data }: any) => {
    const [open, setOpen] = useState(false);
    const [dataWorkshift, setWorkshift] = useState<any>([]);

    const HandleWorkshift = async () => {
        const getData = await getWorkshift()
        const list = getData.map((item) => {
            return { "label": item.name, "value": item.id }
        })
        setWorkshift(list)
    }
    useEffect(() => {
        HandleWorkshift()
    }, []);

    const onCreate = (values: any) => {
        HandleEdit(data.id,{ day: values.day, startTime: TimeFormatSave(values.range[0]), endTime: TimeFormatSave(values.range[1]), idWorkshift: values.idWorkshift })
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
                title="Edit schedule"
                okText="Edit"
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
                    initialValues={{ day:data.day, idWorkshift:data.idWorkshift,range:[TimeFormatRange(data.startTime),TimeFormatRange(data.endTime)] }}
                >
                    <Form.Item
                        name="day"
                        label="Day"
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
    );
};