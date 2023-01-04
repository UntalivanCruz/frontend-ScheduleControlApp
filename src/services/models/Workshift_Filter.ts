/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workshift_IncludeFilter_Items } from './Workshift_IncludeFilter_Items';

export type Workshift_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
        id?: boolean;
        name?: boolean;
        state?: boolean;
    } | Array<'id' | 'name' | 'state'>);
    include?: Array<(Workshift_IncludeFilter_Items | string)>;
};

