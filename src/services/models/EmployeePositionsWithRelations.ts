/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentWithRelations } from './DepartmentWithRelations';
import type { EmployeeWithRelations } from './EmployeeWithRelations';
import type { WorkshiftWithRelations } from './WorkshiftWithRelations';

/**
 * (tsType: EmployeePositionsWithRelations, schemaOptions: { includeRelations: true })
 */
export type EmployeePositionsWithRelations = {
    id?: string;
    name: string;
    status?: boolean;
    idDepartment?: string;
    idWorkshift?: string;
    employees?: Array<EmployeeWithRelations>;
    Department?: DepartmentWithRelations;
    workshift?: WorkshiftWithRelations;
};
