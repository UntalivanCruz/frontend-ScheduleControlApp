/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department_IncludeFilter_Items } from './Department_IncludeFilter_Items';

export type Department_Filter1 = {
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
    include?: Array<(Department_IncludeFilter_Items | string)>;
};
