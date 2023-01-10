
import { ClockCircleOutlined } from '@ant-design/icons';
import { Card, Image } from 'antd';
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
        <thead>
        <tr><th>StartTime</th><th></th><th>EndTime</th></tr>
        </thead>
        <tbody>
        <tr>
          <td><ClockCircleOutlined /> {startTime ? TimeFormat(startTime) : " --:--:--"}</td>
          <td></td><td><ClockCircleOutlined /> {endTime ? TimeFormat(endTime) : " --:--:--"}</td>
        </tr>
        </tbody>
      </table>
    </Card>
  )
}
