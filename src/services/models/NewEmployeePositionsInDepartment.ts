/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<EmployeePositions, 'id'>, 'idDepartment'>, schemaOptions: { title: 'NewEmployeePositionsInDepartment', exclude: [ 'id' ], optional: [ 'idDepartment' ] })
 */
export type NewEmployeePositionsInDepartment = {
    name: string;
    state?: boolean;
    idDepartment?: string;
    idWorkshift?: string;
};

