/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attendance_IncludeFilter_Items } from './Attendance_IncludeFilter_Items';

export type Attendance_Filter1 = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: any;
    fields?: ({
id?: boolean;
date?: boolean;
day?: boolean;
startTime?: boolean;
endTime?: boolean;
status?: boolean;
idEmployee?: boolean;
} | Array<'id' | 'date' | 'day' | 'startTime' | 'endTime' | 'status' | 'idEmployee'>);
    include?: Array<(Attendance_IncludeFilter_Items | string)>;
};
