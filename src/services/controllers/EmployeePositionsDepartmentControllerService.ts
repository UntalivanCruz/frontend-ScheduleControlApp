/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Department } from '../models/Department';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeePositionsDepartmentControllerService {

    /**
     * @param id
     * @returns Department Department belonging to EmployeePositions
     * @throws ApiError
     */
    public static employeePositionsDepartmentControllerGetDepartment(
        id: string,
    ): CancelablePromise<Array<Department>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employee-positions/{id}/department',
            path: {
                'id': id,
            },
        });
    }

}
