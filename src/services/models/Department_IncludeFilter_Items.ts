/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department_ScopeFilter } from './Department_ScopeFilter';

export type Department_IncludeFilter_Items = {
    relation?: Department_IncludeFilter_Items.relation;
    scope?: Department_ScopeFilter;
};

export namespace Department_IncludeFilter_Items {

    export enum relation {
        EMPLOYEE_POSITIONS = 'employeePositions',
    }


}

