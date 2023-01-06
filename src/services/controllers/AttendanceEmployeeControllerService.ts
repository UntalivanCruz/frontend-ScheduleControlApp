/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttendanceEmployeeControllerService {

    /**
     * @param id 
     * @returns Employee Employee belonging to Attendance
     * @throws ApiError
     */
    public static attendanceEmployeeControllerGetEmployee(
id: string,
): CancelablePromise<Array<Employee>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attendances/{id}/employee',
            path: {
                'id': id,
            },
        });
    }

}
