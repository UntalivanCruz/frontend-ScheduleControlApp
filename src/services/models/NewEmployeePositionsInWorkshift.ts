/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<EmployeePositions, 'id'>, 'idWorkshift'>, schemaOptions: { title: 'NewEmployeePositionsInWorkshift', exclude: [ 'id' ], optional: [ 'idWorkshift' ] })
 */
export type NewEmployeePositionsInWorkshift = {
    name: string;
    status?: boolean;
    idDepartment?: string;
    idWorkshift?: string;
};
