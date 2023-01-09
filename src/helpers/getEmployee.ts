import { EmployeeControllerService } from '../services/controllers/EmployeeControllerService';
export const getEmployee = async (identification: string) => {
    const [data,] = await
        EmployeeControllerService
            .employeeControllerFind(
                `{"where":{"identification": "${identification}"}}`
            )
    return data
}
