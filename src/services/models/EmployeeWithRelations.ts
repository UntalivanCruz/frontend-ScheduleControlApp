/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttendanceWithRelations } from './AttendanceWithRelations';
import type { EmployeePositionsWithRelations } from './EmployeePositionsWithRelations';

/**
 * (tsType: EmployeeWithRelations, schemaOptions: { includeRelations: true })
 */
export type EmployeeWithRelations = {
    id?: string;
    firstName: string;
    lastName: string;
    identification: string;
    dateBirth?: string;
    gender?: string;
    nationality: string;
    status?: boolean;
    idEmployeePositions?: string;
    EmployeePositions?: EmployeePositionsWithRelations;
    attendances?: Array<AttendanceWithRelations>;
};
