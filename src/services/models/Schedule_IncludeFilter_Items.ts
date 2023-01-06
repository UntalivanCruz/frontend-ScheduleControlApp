/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Schedule_ScopeFilter } from './Schedule_ScopeFilter';

export type Schedule_IncludeFilter_Items = {
    relation?: Schedule_IncludeFilter_Items.relation;
    scope?: Schedule_ScopeFilter;
};

export namespace Schedule_IncludeFilter_Items {

    export enum relation {
        WORKSHIFT = 'workshift',
    }


}
