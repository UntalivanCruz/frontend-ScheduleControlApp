/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeePositions_ScopeFilter } from './EmployeePositions_ScopeFilter';

export type EmployeePositions_IncludeFilter_Items = {
    relation?: EmployeePositions_IncludeFilter_Items.relation;
    scope?: EmployeePositions_ScopeFilter;
};

export namespace EmployeePositions_IncludeFilter_Items {

    export enum relation {
        EMPLOYEES = 'employees',
        DEPARTMENT = 'Department',
        WORKSHIFT = 'workshift',
    }


}
