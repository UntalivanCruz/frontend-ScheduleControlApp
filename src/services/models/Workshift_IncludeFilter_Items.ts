/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workshift_ScopeFilter } from './Workshift_ScopeFilter';

export type Workshift_IncludeFilter_Items = {
    relation?: Workshift_IncludeFilter_Items.relation;
    scope?: Workshift_ScopeFilter;
};

export namespace Workshift_IncludeFilter_Items {

    export enum relation {
        EMPLOYEE_POSITIONS = 'employeePositions',
        SCHEDULES = 'schedules',
    }


}
