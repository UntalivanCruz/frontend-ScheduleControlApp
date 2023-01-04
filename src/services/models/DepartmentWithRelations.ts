/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeePositionsWithRelations } from './EmployeePositionsWithRelations';

/**
 * (tsType: DepartmentWithRelations, schemaOptions: { includeRelations: true })
 */
export type DepartmentWithRelations = {
    id?: string;
    name: string;
    state?: boolean;
    employeePositions?: Array<EmployeePositionsWithRelations>;
};

