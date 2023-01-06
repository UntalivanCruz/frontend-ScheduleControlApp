/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workshift_IncludeFilter_Items } from './Workshift_IncludeFilter_Items';

export type Workshift_Filter1 = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: any;
    fields?: ({
id?: boolean;
name?: boolean;
status?: boolean;
} | Array<'id' | 'name' | 'status'>);
    include?: Array<(Workshift_IncludeFilter_Items | string)>;
};
