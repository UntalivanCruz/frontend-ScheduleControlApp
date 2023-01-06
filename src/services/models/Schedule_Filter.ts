/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Schedule_IncludeFilter_Items } from './Schedule_IncludeFilter_Items';

export type Schedule_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
id?: boolean;
day?: boolean;
startTime?: boolean;
endTime?: boolean;
status?: boolean;
idWorkshift?: boolean;
} | Array<'id' | 'day' | 'startTime' | 'endTime' | 'status' | 'idWorkshift'>);
    include?: Array<(Schedule_IncludeFilter_Items | string)>;
};
