import React, { FC, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ContactsOutlined,
    UserOutlined,
    CheckSquareOutlined,
    ScheduleOutlined,
    CalendarOutlined,
} from '@ant-design/icons';
import { Attendance } from '../pages/Attendance.page';
import { Department } from '../pages/Department.page';
import { Layout, Menu, theme } from 'antd';
import { Employee } from '../pages/Employee.page';
import { Schedule } from '../pages/Schedule.page';
import { Workshift } from '../pages/Workshift.page';

const { Header, Sider, Content } = Layout;

export const RouterPage: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                          key: '1',
                          icon: <CheckSquareOutlined />,
                          label: <Link to="/attendance" >Attendance</Link>,
                        },
                        {
                          key: '2',
                          icon: <UserOutlined />,
                          label: <Link to="/employee">Employee</Link>,
                        },
                        {
                          key: '3',
                          icon: <ContactsOutlined />,
                          label: <Link to="/department">Department</Link>,
                        },
                        {
                            key: '4',
                            icon: <ScheduleOutlined />,
                            label: <Link to="/workshift">WorkShift</Link>,
                          },
                          {
                            key: '5',
                            icon: <CalendarOutlined />,
                            label: <Link to="/schedule">Schedule</Link>,
                          },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 10, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Routes>
                        <Route path='/attendance' element={<Attendance />} />
                        <Route path='/department' element={<Department />} />
                        <Route path='/employee' element={<Employee />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/workshift' element={<Workshift />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}
