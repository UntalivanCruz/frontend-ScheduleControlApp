import { useState, useEffect } from "react"
import { Divider, Row, Col } from 'antd';
import { SearchEmployee, AttendanceCard } from '../components';
import { EmployeeWithRelations, AttendanceControllerService, NewAttendance, AttendanceWithRelations, ApiError } from '../services';
import { DateNow, TruncateDate, DateFormat, DayNow, TimeNow } from '../utils/TimeFormat';
import { getAttendance } from "../helpers";

const date = DateFormat(TruncateDate(DateNow()))

export const Attendance = () => {
  const [data, setData] = useState<AttendanceWithRelations[]>([]);
  const [error, setError] = useState<ApiError | null>();

  const handleData = async (value: EmployeeWithRelations) => {
    // if (data.includes(value)) return;
    const Attendance = await getAttendance(String(value.id), date)

    if (Attendance) {
      const time = Attendance.startTime ? { endTime: TimeNow() } : { startTime: TimeNow() }
      setData(data.map((item) => {
        return item.id === Attendance.id ? { ...item, ...time } : item
      }))
      await AttendanceControllerService
        .attendanceControllerUpdateById(String(Attendance.id), time)
    } else {
      const insertAttendance: NewAttendance = {
        date: date,
        day: DayNow(),
        startTime: TimeNow(),
        idEmployee: value.id,
      }
      let newValue: AttendanceWithRelations = await AttendanceControllerService
        .attendanceControllerCreate(insertAttendance)
      newValue.Employee = { ...value }
      setData([newValue, ...data]);
    }
  }

  useEffect(() => {
    AttendanceControllerService.attendanceControllerFind(
      `{"where":{"date": "${date}"},"include":[{"relation": "Employee"}],"order":["endTime DESC","startTime DESC"]}`
    )
      .then((originData) => setData(originData))
      .catch((error) => setError(error));
  }, []);


  return (
    <>
      <Row>
        <Col span={24}><h4>Welcome! Register your entry or exit using this form.</h4></Col>
      </Row>
      <Divider />
      <Row >
        <Col span={24}>
          <SearchEmployee newData={handleData} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}><h4>Today's attendance record history</h4></Col>
      </Row>
      <Row>
      {data.map((item: any) => (
          <Col key={item.id} span={6}>
            <AttendanceCard key={item.id} {...item} />
          </Col>
        ))}
      </Row>
      {error}
    </>
  )
}
