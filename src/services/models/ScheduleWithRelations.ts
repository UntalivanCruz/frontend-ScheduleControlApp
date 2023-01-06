/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkshiftWithRelations } from './WorkshiftWithRelations';

/**
 * (tsType: ScheduleWithRelations, schemaOptions: { includeRelations: true })
 */
export type ScheduleWithRelations = {
    id?: string;
    day: number;
    startTime?: string;
    endTime?: string;
    status?: boolean;
    idWorkshift?: string;
    workshift?: WorkshiftWithRelations;
};
