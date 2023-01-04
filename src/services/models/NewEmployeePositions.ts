/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<EmployeePositions, 'id'>, schemaOptions: { title: 'NewEmployeePositions', exclude: [ 'id' ] })
 */
export type NewEmployeePositions = {
    name: string;
    state?: boolean;
    idDepartment?: string;
    idWorkshift?: string;
};

