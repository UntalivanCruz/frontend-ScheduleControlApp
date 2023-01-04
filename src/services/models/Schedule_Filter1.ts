/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Schedule_IncludeFilter_Items } from './Schedule_IncludeFilter_Items';

export type Schedule_Filter1 = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: any;
    fields?: ({
        id?: boolean;
        day?: boolean;
        startTime?: boolean;
        endTime?: boolean;
        state?: boolean;
        idWorkshift?: boolean;
    } | Array<'id' | 'day' | 'startTime' | 'endTime' | 'state' | 'idWorkshift'>);
    include?: Array<(Schedule_IncludeFilter_Items | string)>;
};

