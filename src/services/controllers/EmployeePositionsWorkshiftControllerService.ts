/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Workshift } from '../models/Workshift';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeePositionsWorkshiftControllerService {

    /**
     * @param id
     * @returns Workshift Workshift belonging to EmployeePositions
     * @throws ApiError
     */
    public static employeePositionsWorkshiftControllerGetWorkshift(
        id: string,
    ): CancelablePromise<Array<Workshift>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employee-positions/{id}/workshift',
            path: {
                'id': id,
            },
        });
    }

}
