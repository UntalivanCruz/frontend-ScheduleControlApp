import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Card, Image } from 'antd';
import { TimeFormat } from '../utils/TimeFormat';


export const AttendanceCard = ({ Employee, startTime, endTime }: any) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Image alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
        preview={{
          src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }} />}
    >
      <Card.Meta title={Employee.firstName} description={Employee.lastName} />
      <br />
      <table style={{ textAlign: 'center' }}>
        <tr><td>StartTime</td><td></td><td>EndTime</td></tr>
        <tr>
          <td><ClockCircleOutlined /> {startTime ? TimeFormat(startTime) : " --:-- --"}</td>
          <td></td><td><ClockCircleOutlined /> {endTime ? TimeFormat(endTime) : " --:-- --"}</td>
        </tr>
      </table>
    </Card>
  )
}
