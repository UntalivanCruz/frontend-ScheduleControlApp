/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee_ScopeFilter } from './Employee_ScopeFilter';

export type Employee_IncludeFilter_Items = {
    relation?: Employee_IncludeFilter_Items.relation;
    scope?: Employee_ScopeFilter;
};

export namespace Employee_IncludeFilter_Items {

    export enum relation {
        EMPLOYEE_POSITIONS = 'EmployeePositions',
        ATTENDANCES = 'attendances',
    }


}

