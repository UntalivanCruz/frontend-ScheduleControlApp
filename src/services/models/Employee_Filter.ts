/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee_IncludeFilter_Items } from './Employee_IncludeFilter_Items';

export type Employee_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
        id?: boolean;
        firstName?: boolean;
        lastName?: boolean;
        identification?: boolean;
        dateBirth?: boolean;
        gender?: boolean;
        nationality?: boolean;
        state?: boolean;
        idEmployeePositions?: boolean;
    } | Array<'id' | 'firstName' | 'lastName' | 'identification' | 'dateBirth' | 'gender' | 'nationality' | 'state' | 'idEmployeePositions'>);
    include?: Array<(Employee_IncludeFilter_Items | string)>;
};

