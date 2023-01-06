/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attendance } from '../models/Attendance';
import type { AttendancePartial } from '../models/AttendancePartial';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewAttendanceInEmployee } from '../models/NewAttendanceInEmployee';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeeAttendanceControllerService {

    /**
     * @param id 
     * @param requestBody 
     * @returns Attendance Employee model instance
     * @throws ApiError
     */
    public static employeeAttendanceControllerCreate(
id: string,
requestBody?: NewAttendanceInEmployee,
): CancelablePromise<Attendance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/employees/{id}/attendances',
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
     * @returns loopback_Count Employee.Attendance PATCH success count
     * @throws ApiError
     */
    public static employeeAttendanceControllerPatch(
id: string,
where?: any,
requestBody?: AttendancePartial,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employees/{id}/attendances',
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
     * @returns Attendance Array of Employee has many Attendance
     * @throws ApiError
     */
    public static employeeAttendanceControllerFind(
id: string,
filter?: any,
): CancelablePromise<Array<Attendance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employees/{id}/attendances',
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
     * @returns loopback_Count Employee.Attendance DELETE success count
     * @throws ApiError
     */
    public static employeeAttendanceControllerDelete(
id: string,
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/employees/{id}/attendances',
            path: {
                'id': id,
            },
            query: {
                'where': where,
            },
        });
    }

}
