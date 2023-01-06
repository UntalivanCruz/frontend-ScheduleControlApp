/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { loopback_Count } from '../models/loopback_Count';
import type { NewWorkshift } from '../models/NewWorkshift';
import type { Workshift } from '../models/Workshift';
import type { WorkshiftPartial } from '../models/WorkshiftPartial';
import type { WorkshiftWithRelations } from '../models/WorkshiftWithRelations';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkshiftControllerService {

    /**
     * @param where 
     * @returns loopback_Count Workshift model count
     * @throws ApiError
     */
    public static workshiftControllerCount(
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workshifts/count',
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
    public static workshiftControllerReplaceById(
id: string,
requestBody?: Workshift,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/workshifts/{id}',
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
    public static workshiftControllerUpdateById(
id: string,
requestBody?: WorkshiftPartial,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workshifts/{id}',
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
     * @returns WorkshiftWithRelations Workshift model instance
     * @throws ApiError
     */
    public static workshiftControllerFindById(
id: string,
filter?: any,
): CancelablePromise<WorkshiftWithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workshifts/{id}',
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
    public static workshiftControllerDeleteById(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workshifts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Workshift Workshift model instance
     * @throws ApiError
     */
    public static workshiftControllerCreate(
requestBody?: NewWorkshift,
): CancelablePromise<Workshift> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workshifts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where 
     * @param requestBody 
     * @returns loopback_Count Workshift PATCH success count
     * @throws ApiError
     */
    public static workshiftControllerUpdateAll(
where?: any,
requestBody?: WorkshiftPartial,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workshifts',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter 
     * @returns WorkshiftWithRelations Array of Workshift model instances
     * @throws ApiError
     */
    public static workshiftControllerFind(
filter?: any,
): CancelablePromise<Array<WorkshiftWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workshifts',
            query: {
                'filter': filter,
            },
        });
    }

}
