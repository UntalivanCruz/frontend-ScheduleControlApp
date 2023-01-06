/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeePositions } from '../models/EmployeePositions';
import type { EmployeePositionsPartial } from '../models/EmployeePositionsPartial';
import type { EmployeePositionsWithRelations } from '../models/EmployeePositionsWithRelations';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewEmployeePositions } from '../models/NewEmployeePositions';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeePositionsControllerService {

    /**
     * @param where 
     * @returns loopback_Count EmployeePositions model count
     * @throws ApiError
     */
    public static employeePositionsControllerCount(
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employee-positions/count',
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
    public static employeePositionsControllerReplaceById(
id: string,
requestBody?: EmployeePositions,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/employee-positions/{id}',
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
    public static employeePositionsControllerUpdateById(
id: string,
requestBody?: EmployeePositionsPartial,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employee-positions/{id}',
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
     * @returns EmployeePositionsWithRelations EmployeePositions model instance
     * @throws ApiError
     */
    public static employeePositionsControllerFindById(
id: string,
filter?: any,
): CancelablePromise<EmployeePositionsWithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employee-positions/{id}',
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
    public static employeePositionsControllerDeleteById(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/employee-positions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns EmployeePositions EmployeePositions model instance
     * @throws ApiError
     */
    public static employeePositionsControllerCreate(
requestBody?: NewEmployeePositions,
): CancelablePromise<EmployeePositions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/employee-positions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where 
     * @param requestBody 
     * @returns loopback_Count EmployeePositions PATCH success count
     * @throws ApiError
     */
    public static employeePositionsControllerUpdateAll(
where?: any,
requestBody?: EmployeePositionsPartial,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employee-positions',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter 
     * @returns EmployeePositionsWithRelations Array of EmployeePositions model instances
     * @throws ApiError
     */
    public static employeePositionsControllerFind(
filter?: any,
): CancelablePromise<Array<EmployeePositionsWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employee-positions',
            query: {
                'filter': filter,
            },
        });
    }

}
