/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Employee, 'id'>, schemaOptions: { title: 'NewEmployee', exclude: [ 'id' ] })
 */
export type NewEmployee = {
    firstName: string;
    lastName: string;
    identification: string;
    dateBirth?: string;
    gender?: string;
    nationality: string;
    state?: boolean;
    idEmployeePositions?: string;
};

