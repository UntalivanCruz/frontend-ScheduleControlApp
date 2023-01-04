/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department_IncludeFilter_Items } from './Department_IncludeFilter_Items';

export type Department_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
        id?: boolean;
        name?: boolean;
        state?: boolean;
    } | Array<'id' | 'name' | 'state'>);
    include?: Array<(Department_IncludeFilter_Items | string)>;
};

