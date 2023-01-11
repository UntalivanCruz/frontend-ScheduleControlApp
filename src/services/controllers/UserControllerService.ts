/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewUser } from '../models/NewUser';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * @param requestBody 
     * @returns User User
     * @throws ApiError
     */
    public static userControllerSignUp(
requestBody?: NewUser,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody The input of login function
     * @returns any Token
     * @throws ApiError
     */
    public static userControllerLogin(
requestBody: {
email: string;
password: string;
},
): CancelablePromise<{
token?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns string Return current user
     * @throws ApiError
     */
    public static userControllerWhoAmI(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/whoAmI',
        });
    }

}
