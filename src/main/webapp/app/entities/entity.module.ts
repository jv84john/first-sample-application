import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FirstSampleApplicationRegionModule } from './region/region.module';
import { FirstSampleApplicationCountryModule } from './country/country.module';
import { FirstSampleApplicationLocationModule } from './location/location.module';
import { FirstSampleApplicationDepartmentModule } from './department/department.module';
import { FirstSampleApplicationTaskModule } from './task/task.module';
import { FirstSampleApplicationEmployeeModule } from './employee/employee.module';
import { FirstSampleApplicationJobModule } from './job/job.module';
import { FirstSampleApplicationJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        FirstSampleApplicationRegionModule,
        FirstSampleApplicationCountryModule,
        FirstSampleApplicationLocationModule,
        FirstSampleApplicationDepartmentModule,
        FirstSampleApplicationTaskModule,
        FirstSampleApplicationEmployeeModule,
        FirstSampleApplicationJobModule,
        FirstSampleApplicationJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstSampleApplicationEntityModule {}
