import { useState, useEffect } from "react"
import { Divider } from 'antd';
import { SearchEmployee } from '../components';
import { EmployeeWithRelations, AttendanceControllerService, NewAttendance, AttendanceWithRelations, ApiError } from '../services';
import { DateNow, TruncateDate, DateFormat, DayNow, TimeNow } from '../utils/TimeFormat';
import { getAttendance } from "../helpers/getAttendance";

const date = DateFormat(TruncateDate(DateNow()))

export const Attendance = () => {
  const [data, setData] = useState<AttendanceWithRelations[]>([]);
  const [error, setError] = useState<ApiError | null>();

  const handleData = async (value: EmployeeWithRelations) => {
    // if (data.includes(value)) return;
    const Attendance = await getAttendance(String(value.id), date)

    if (Attendance) {
      const time = Attendance.startTime ? { endTime: TimeNow() } : { startTime: TimeNow() }
      setData(data.map( (item)=>{
        return item.id===Attendance.id ? {...item,...time} : item
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
      let newValue:AttendanceWithRelations = await AttendanceControllerService
        .attendanceControllerCreate(insertAttendance)
      newValue.Employee={...value}
      setData([newValue, ...data]);
    }
  }

  useEffect(() => {
    AttendanceControllerService.attendanceControllerFind(`{"where":{"date": "${date}"},"include":[{"relation": "Employee"}]}`)
      .then((originData) => setData(originData))
      .catch((error) => setError(error));
  }, []);


  return (
    <>
      <h4>Welcome! Register your entry or exit using this form.</h4>
      <Divider />
      <SearchEmployee newData={handleData} />
      <ol>
        {data.map((item: any) => (
          <li key={item.id}> {item.Employee.firstName} - {item.startTime} - {item.endTime}</li>
        ))}
      </ol>
      {error}
    </>
  )
}
