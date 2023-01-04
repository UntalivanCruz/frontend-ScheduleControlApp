/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Attendance, 'id'>, schemaOptions: { title: 'NewAttendance', exclude: [ 'id' ] })
 */
export type NewAttendance = {
    date: string;
    day: number;
    startTime?: string;
    endTime?: string;
    state?: boolean;
    idEmployee?: string;
};

