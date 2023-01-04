/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Schedule, 'id'>, 'idWorkshift'>, schemaOptions: { title: 'NewScheduleInWorkshift', exclude: [ 'id' ], optional: [ 'idWorkshift' ] })
 */
export type NewScheduleInWorkshift = {
    day: number;
    startTime?: string;
    endTime?: string;
    state?: boolean;
    idWorkshift?: string;
};

