import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { SelectRegionRoutingModule } from './select-region-routing.module';
import { SelectRegionComponent } from './select-region.component';


@NgModule({
    imports: [
        CommonModule,
        SelectRegionRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [SelectRegionComponent]
})
export class SelectRegionModule {}
