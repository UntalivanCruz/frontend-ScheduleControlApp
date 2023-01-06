/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';
import type { EmployeePartial } from '../models/EmployeePartial';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewEmployeeInEmployeePositions } from '../models/NewEmployeeInEmployeePositions';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeePositionsEmployeeControllerService {

    /**
     * @param id 
     * @param requestBody 
     * @returns Employee EmployeePositions model instance
     * @throws ApiError
     */
    public static employeePositionsEmployeeControllerCreate(
id: string,
requestBody?: NewEmployeeInEmployeePositions,
): CancelablePromise<Employee> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/employee-positions/{id}/employees',
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
     * @returns loopback_Count EmployeePositions.Employee PATCH success count
     * @throws ApiError
     */
    public static employeePositionsEmployeeControllerPatch(
id: string,
where?: any,
requestBody?: EmployeePartial,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employee-positions/{id}/employees',
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
     * @returns Employee Array of EmployeePositions has many Employee
     * @throws ApiError
     */
    public static employeePositionsEmployeeControllerFind(
id: string,
filter?: any,
): CancelablePromise<Array<Employee>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employee-positions/{id}/employees',
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
     * @returns loopback_Count EmployeePositions.Employee DELETE success count
     * @throws ApiError
     */
    public static employeePositionsEmployeeControllerDelete(
id: string,
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/employee-positions/{id}/employees',
            path: {
                'id': id,
            },
            query: {
                'where': where,
            },
        });
    }

}
