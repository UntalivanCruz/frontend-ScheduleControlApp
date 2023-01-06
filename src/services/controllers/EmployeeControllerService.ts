/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';
import type { EmployeePartial } from '../models/EmployeePartial';
import type { EmployeeWithRelations } from '../models/EmployeeWithRelations';
import type { loopback_Count } from '../models/loopback_Count';
import type { NewEmployee } from '../models/NewEmployee';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeeControllerService {

    /**
     * @param where 
     * @returns loopback_Count Employee model count
     * @throws ApiError
     */
    public static employeeControllerCount(
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employees/count',
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
    public static employeeControllerReplaceById(
id: string,
requestBody?: Employee,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/employees/{id}',
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
    public static employeeControllerUpdateById(
id: string,
requestBody?: EmployeePartial,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employees/{id}',
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
     * @returns EmployeeWithRelations Employee model instance
     * @throws ApiError
     */
    public static employeeControllerFindById(
id: string,
filter?: any,
): CancelablePromise<EmployeeWithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employees/{id}',
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
    public static employeeControllerDeleteById(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/employees/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Employee Employee model instance
     * @throws ApiError
     */
    public static employeeControllerCreate(
requestBody?: NewEmployee,
): CancelablePromise<Employee> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/employees',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where 
     * @param requestBody 
     * @returns loopback_Count Employee PATCH success count
     * @throws ApiError
     */
    public static employeeControllerUpdateAll(
where?: any,
requestBody?: EmployeePartial,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employees',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter 
     * @returns EmployeeWithRelations Array of Employee model instances
     * @throws ApiError
     */
    public static employeeControllerFind(
filter?: any,
): CancelablePromise<Array<EmployeeWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employees',
            query: {
                'filter': filter,
            },
        });
    }

}
