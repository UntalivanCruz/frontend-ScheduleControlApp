/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeeWithRelations } from './EmployeeWithRelations';

/**
 * (tsType: AttendanceWithRelations, schemaOptions: { includeRelations: true })
 */
export type AttendanceWithRelations = {
    id?: string;
    date: string;
    day: number;
    startTime?: string;
    endTime?: string;
    state?: boolean;
    idEmployee?: string;
    Employee?: EmployeeWithRelations;
};

