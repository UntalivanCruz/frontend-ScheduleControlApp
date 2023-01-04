/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attendance_IncludeFilter_Items } from './Attendance_IncludeFilter_Items';

export type Attendance_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
        id?: boolean;
        date?: boolean;
        day?: boolean;
        startTime?: boolean;
        endTime?: boolean;
        state?: boolean;
        idEmployee?: boolean;
    } | Array<'id' | 'date' | 'day' | 'startTime' | 'endTime' | 'state' | 'idEmployee'>);
    include?: Array<(Attendance_IncludeFilter_Items | string)>;
};

