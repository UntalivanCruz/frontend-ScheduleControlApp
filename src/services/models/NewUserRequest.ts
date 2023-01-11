/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewUserRequest = {
    id?: string;
    realm?: string;
    username?: string;
    email: string;
    emailVerified?: boolean;
    verificationToken?: string;
    password: string;
};
