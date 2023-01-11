import { EmployeePositionsControllerService } from '../services';

export const getPositionEmployee = async () => {
    const data = await
        EmployeePositionsControllerService
            .employeePositionsControllerFind(
                `{"fields": {"id": true,"name": true,"status": true},"where":{"status": true}}`
            )
    return data
}