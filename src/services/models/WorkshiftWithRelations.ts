/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeePositionsWithRelations } from './EmployeePositionsWithRelations';
import type { ScheduleWithRelations } from './ScheduleWithRelations';

/**
 * (tsType: WorkshiftWithRelations, schemaOptions: { includeRelations: true })
 */
export type WorkshiftWithRelations = {
    id?: string;
    name: string;
    status?: boolean;
    employeePositions?: Array<EmployeePositionsWithRelations>;
    schedules?: Array<ScheduleWithRelations>;
};
