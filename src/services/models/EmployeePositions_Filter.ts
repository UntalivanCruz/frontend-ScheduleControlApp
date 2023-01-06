/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeePositions_IncludeFilter_Items } from './EmployeePositions_IncludeFilter_Items';

export type EmployeePositions_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
id?: boolean;
name?: boolean;
status?: boolean;
idDepartment?: boolean;
idWorkshift?: boolean;
} | Array<'id' | 'name' | 'status' | 'idDepartment' | 'idWorkshift'>);
    include?: Array<(EmployeePositions_IncludeFilter_Items | string)>;
};
