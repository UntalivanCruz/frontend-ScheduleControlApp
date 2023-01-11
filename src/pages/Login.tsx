import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input, Image, message } from 'antd';
import { UserControllerService } from '../services';
import { OpenAPI } from '../services/core/OpenAPI';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    UserControllerService.userControllerLogin(values)
    .then((autorizathion)=>{
      message.success('Welcome!');
      OpenAPI.TOKEN=autorizathion.token
      navigate('/', {
        replace: true
      })
    })
    .catch(() => {
      message.error('User or password incorrect!');
    //  setError(error)
    })
  };

  return (
    <>
      <div style={{"display": "flex"}}>
        <div className="login-form-container">
          <Image width={200} className="imagen" src="./assets/attendance.png" preview={false} />
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                type="email" 
                placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
        </div>
      </div>
    </>
  );
};