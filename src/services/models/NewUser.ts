/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: NewUserRequest, schemaOptions: { title: 'NewUser' })
 */
export type NewUser = {
    id?: string;
    realm?: string;
    username?: string;
    email: string;
    emailVerified?: boolean;
    verificationToken?: string;
    password: string;
};
