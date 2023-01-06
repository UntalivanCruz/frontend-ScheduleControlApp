/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee_IncludeFilter_Items } from './Employee_IncludeFilter_Items';

export type Employee_Filter1 = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: any;
    fields?: ({
id?: boolean;
firstName?: boolean;
lastName?: boolean;
identification?: boolean;
dateBirth?: boolean;
gender?: boolean;
nationality?: boolean;
status?: boolean;
idEmployeePositions?: boolean;
} | Array<'id' | 'firstName' | 'lastName' | 'identification' | 'dateBirth' | 'gender' | 'nationality' | 'status' | 'idEmployeePositions'>);
    include?: Array<(Employee_IncludeFilter_Items | string)>;
};
