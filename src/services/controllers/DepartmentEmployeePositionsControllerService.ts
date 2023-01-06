/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeePositions } from '../models/EmployeePositions';
import type { EmployeePositionsPartial } from '../models/EmployeePositionsPartial';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewEmployeePositionsInDepartment } from '../models/NewEmployeePositionsInDepartment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DepartmentEmployeePositionsControllerService {

    /**
     * @param id 
     * @param requestBody 
     * @returns EmployeePositions Department model instance
     * @throws ApiError
     */
    public static departmentEmployeePositionsControllerCreate(
id: string,
requestBody?: NewEmployeePositionsInDepartment,
): CancelablePromise<EmployeePositions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/departments/{id}/employee-positions',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @param where 
     * @param requestBody 
     * @returns loopback_Count Department.EmployeePositions PATCH success count
     * @throws ApiError
     */
    public static departmentEmployeePositionsControllerPatch(
id: string,
where?: any,
requestBody?: EmployeePositionsPartial,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/departments/{id}/employee-positions',
            path: {
                'id': id,
            },
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @param filter 
     * @returns EmployeePositions Array of Department has many EmployeePositions
     * @throws ApiError
     */
    public static departmentEmployeePositionsControllerFind(
id: string,
filter?: any,
): CancelablePromise<Array<EmployeePositions>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments/{id}/employee-positions',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * @param id 
     * @param where 
     * @returns loopback_Count Department.EmployeePositions DELETE success count
     * @throws ApiError
     */
    public static departmentEmployeePositionsControllerDelete(
id: string,
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/departments/{id}/employee-positions',
            path: {
                'id': id,
            },
            query: {
                'where': where,
            },
        });
    }

}
