/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { loopback_Count } from '../models/loopback_Count';
import type { NewSchedule } from '../models/NewSchedule';
import type { Schedule } from '../models/Schedule';
import type { SchedulePartial } from '../models/SchedulePartial';
import type { ScheduleWithRelations } from '../models/ScheduleWithRelations';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ScheduleControllerService {

    /**
     * @param where 
     * @returns loopback_Count Schedule model count
     * @throws ApiError
     */
    public static scheduleControllerCount(
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schedules/count',
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
    public static scheduleControllerReplaceById(
id: string,
requestBody?: Schedule,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/schedules/{id}',
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
    public static scheduleControllerUpdateById(
id: string,
requestBody?: SchedulePartial,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/schedules/{id}',
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
     * @returns ScheduleWithRelations Schedule model instance
     * @throws ApiError
     */
    public static scheduleControllerFindById(
id: string,
filter?: any,
): CancelablePromise<ScheduleWithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schedules/{id}',
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
    public static scheduleControllerDeleteById(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/schedules/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Schedule Schedule model instance
     * @throws ApiError
     */
    public static scheduleControllerCreate(
requestBody?: NewSchedule,
): CancelablePromise<Schedule> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/schedules',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where 
     * @param requestBody 
     * @returns loopback_Count Schedule PATCH success count
     * @throws ApiError
     */
    public static scheduleControllerUpdateAll(
where?: any,
requestBody?: SchedulePartial,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/schedules',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter 
     * @returns ScheduleWithRelations Array of Schedule model instances
     * @throws ApiError
     */
    public static scheduleControllerFind(
filter?: any,
): CancelablePromise<Array<ScheduleWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schedules',
            query: {
                'filter': filter,
            },
        });
    }

}
