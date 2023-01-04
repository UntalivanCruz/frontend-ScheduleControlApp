/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { loopback_Count } from '../models/loopback_Count';
import type { NewScheduleInWorkshift } from '../models/NewScheduleInWorkshift';
import type { Schedule } from '../models/Schedule';
import type { SchedulePartial } from '../models/SchedulePartial';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkshiftScheduleControllerService {

    /**
     * @param id
     * @param requestBody
     * @returns Schedule Workshift model instance
     * @throws ApiError
     */
    public static workshiftScheduleControllerCreate(
        id: string,
        requestBody?: NewScheduleInWorkshift,
    ): CancelablePromise<Schedule> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workshifts/{id}/schedules',
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
     * @returns loopback_Count Workshift.Schedule PATCH success count
     * @throws ApiError
     */
    public static workshiftScheduleControllerPatch(
        id: string,
        where?: any,
        requestBody?: SchedulePartial,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workshifts/{id}/schedules',
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
     * @returns Schedule Array of Workshift has many Schedule
     * @throws ApiError
     */
    public static workshiftScheduleControllerFind(
        id: string,
        filter?: any,
    ): CancelablePromise<Array<Schedule>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workshifts/{id}/schedules',
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
     * @returns loopback_Count Workshift.Schedule DELETE success count
     * @throws ApiError
     */
    public static workshiftScheduleControllerDelete(
        id: string,
        where?: any,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workshifts/{id}/schedules',
            path: {
                'id': id,
            },
            query: {
                'where': where,
            },
        });
    }

}
