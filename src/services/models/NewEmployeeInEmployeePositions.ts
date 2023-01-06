/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Employee, 'id'>, 'idEmployeePositions'>, schemaOptions: { title: 'NewEmployeeInEmployeePositions', exclude: [ 'id' ], optional: [ 'idEmployeePositions' ] })
 */
export type NewEmployeeInEmployeePositions = {
    firstName: string;
    lastName: string;
    identification: string;
    dateBirth?: string;
    gender?: string;
    nationality: string;
    status?: boolean;
    idEmployeePositions?: string;
};
