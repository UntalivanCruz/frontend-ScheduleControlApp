/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeePositions } from '../models/EmployeePositions';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeeEmployeePositionsControllerService {

    /**
     * @param id 
     * @returns EmployeePositions EmployeePositions belonging to Employee
     * @throws ApiError
     */
    public static employeeEmployeePositionsControllerGetEmployeePositions(
id: string,
): CancelablePromise<Array<EmployeePositions>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employees/{id}/employee-positions',
            path: {
                'id': id,
            },
        });
    }

}
