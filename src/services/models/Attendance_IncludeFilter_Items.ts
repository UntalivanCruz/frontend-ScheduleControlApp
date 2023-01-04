/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attendance_ScopeFilter } from './Attendance_ScopeFilter';

export type Attendance_IncludeFilter_Items = {
    relation?: Attendance_IncludeFilter_Items.relation;
    scope?: Attendance_ScopeFilter;
};

export namespace Attendance_IncludeFilter_Items {

    export enum relation {
        EMPLOYEE = 'Employee',
    }


}

