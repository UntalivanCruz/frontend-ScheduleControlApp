/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeePositions } from '../models/EmployeePositions';
import type { EmployeePositionsPartial } from '../models/EmployeePositionsPartial';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewEmployeePositionsInWorkshift } from '../models/NewEmployeePositionsInWorkshift';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkshiftEmployeePositionsControllerService {

    /**
     * @param id
     * @param requestBody
     * @returns EmployeePositions Workshift model instance
     * @throws ApiError
     */
    public static workshiftEmployeePositionsControllerCreate(
        id: string,
        requestBody?: NewEmployeePositionsInWorkshift,
    ): CancelablePromise<EmployeePositions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workshifts/{id}/employee-positions',
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
     * @returns loopback_Count Workshift.EmployeePositions PATCH success count
     * @throws ApiError
     */
    public static workshiftEmployeePositionsControllerPatch(
        id: string,
        where?: any,
        requestBody?: EmployeePositionsPartial,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workshifts/{id}/employee-positions',
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
     * @returns EmployeePositions Array of Workshift has many EmployeePositions
     * @throws ApiError
     */
    public static workshiftEmployeePositionsControllerFind(
        id: string,
        filter?: any,
    ): CancelablePromise<Array<EmployeePositions>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workshifts/{id}/employee-positions',
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
     * @returns loopback_Count Workshift.EmployeePositions DELETE success count
     * @throws ApiError
     */
    public static workshiftEmployeePositionsControllerDelete(
        id: string,
        where?: any,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workshifts/{id}/employee-positions',
            path: {
                'id': id,
            },
            query: {
                'where': where,
            },
        });
    }

}
