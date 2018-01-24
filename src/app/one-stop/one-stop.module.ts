import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneStopRoutingModule } from './one-stop-routing.module';
import { OneStopComponent } from './one-stop.component';
import { HeaderModule } from '../shared';


@NgModule({
    imports: [
        CommonModule,
        OneStopRoutingModule,
        HeaderModule
    ],
    declarations: [OneStopComponent]
})
export class OneStopModule {}
