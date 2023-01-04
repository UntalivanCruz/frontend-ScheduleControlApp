/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Department } from '../models/Department';
import type { DepartmentPartial } from '../models/DepartmentPartial';
import type { DepartmentWithRelations } from '../models/DepartmentWithRelations';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewDepartment } from '../models/NewDepartment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DepartmentControllerService {

    /**
     * @param where
     * @returns loopback_Count Department model count
     * @throws ApiError
     */
    public static departmentControllerCount(
        where?: any,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments/count',
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
    public static departmentControllerReplaceById(
        id: string,
        requestBody?: Department,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/departments/{id}',
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
    public static departmentControllerUpdateById(
        id: string,
        requestBody?: DepartmentPartial,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/departments/{id}',
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
     * @returns DepartmentWithRelations Department model instance
     * @throws ApiError
     */
    public static departmentControllerFindById(
        id: string,
        filter?: any,
    ): CancelablePromise<DepartmentWithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments/{id}',
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
    public static departmentControllerDeleteById(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/departments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Department Department model instance
     * @throws ApiError
     */
    public static departmentControllerCreate(
        requestBody?: NewDepartment,
    ): CancelablePromise<Department> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where
     * @param requestBody
     * @returns loopback_Count Department PATCH success count
     * @throws ApiError
     */
    public static departmentControllerUpdateAll(
        where?: any,
        requestBody?: DepartmentPartial,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/departments',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter
     * @returns DepartmentWithRelations Array of Department model instances
     * @throws ApiError
     */
    public static departmentControllerFind(
        filter?: any,
    ): CancelablePromise<Array<DepartmentWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments',
            query: {
                'filter': filter,
            },
        });
    }

}
