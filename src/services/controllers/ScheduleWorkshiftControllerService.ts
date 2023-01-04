/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Workshift } from '../models/Workshift';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ScheduleWorkshiftControllerService {

    /**
     * @param id
     * @returns Workshift Workshift belonging to Schedule
     * @throws ApiError
     */
    public static scheduleWorkshiftControllerGetWorkshift(
        id: string,
    ): CancelablePromise<Array<Workshift>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schedules/{id}/workshift',
            path: {
                'id': id,
            },
        });
    }

}
