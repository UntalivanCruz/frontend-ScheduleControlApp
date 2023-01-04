/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Attendance, 'id'>, 'idEmployee'>, schemaOptions: { title: 'NewAttendanceInEmployee', exclude: [ 'id' ], optional: [ 'idEmployee' ] })
 */
export type NewAttendanceInEmployee = {
    date: string;
    day: number;
    startTime?: string;
    endTime?: string;
    state?: boolean;
    idEmployee?: string;
};

