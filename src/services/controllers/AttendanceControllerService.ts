/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attendance } from '../models/Attendance';
import type { AttendancePartial } from '../models/AttendancePartial';
import type { AttendanceWithRelations } from '../models/AttendanceWithRelations';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewAttendance } from '../models/NewAttendance';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttendanceControllerService {

    /**
     * @param where
     * @returns loopback_Count Attendance model count
     * @throws ApiError
     */
    public static attendanceControllerCount(
        where?: any,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attendances/count',
            query: {
                'where': where,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static attendanceControllerReplaceById(
        id: string,
        requestBody?: Attendance,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/attendances/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static attendanceControllerUpdateById(
        id: string,
        requestBody?: AttendancePartial,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/attendances/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param filter
     * @returns AttendanceWithRelations Attendance model instance
     * @throws ApiError
     */
    public static attendanceControllerFindById(
        id: string,
        filter?: any,
    ): CancelablePromise<AttendanceWithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attendances/{id}',
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
     * @returns void
     * @throws ApiError
     */
    public static attendanceControllerDeleteById(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/attendances/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Attendance Attendance model instance
     * @throws ApiError
     */
    public static attendanceControllerCreate(
        requestBody?: NewAttendance,
    ): CancelablePromise<Attendance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/attendances',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where
     * @param requestBody
     * @returns loopback_Count Attendance PATCH success count
     * @throws ApiError
     */
    public static attendanceControllerUpdateAll(
        where?: any,
        requestBody?: AttendancePartial,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/attendances',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter
     * @returns AttendanceWithRelations Array of Attendance model instances
     * @throws ApiError
     */
    public static attendanceControllerFind(
        filter?: any,
    ): CancelablePromise<Array<AttendanceWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attendances',
            query: {
                'filter': filter,
            },
        });
    }

}
