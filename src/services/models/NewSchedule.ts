/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Schedule, 'id'>, schemaOptions: { title: 'NewSchedule', exclude: [ 'id' ] })
 */
export type NewSchedule = {
    day: number;
    startTime?: string;
    endTime?: string;
    state?: boolean;
    idWorkshift?: string;
};

