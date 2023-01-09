import { AttendanceControllerService } from "../services"

export const getAttendance = async(idEmployee:string, date:string) => {
    const [data,] = await
    AttendanceControllerService
        .attendanceControllerFind(
            `{"where":{"and":[{"idEmployee": "${idEmployee}"},{"date": "${date}"}]}}`
        )
    return data
}
