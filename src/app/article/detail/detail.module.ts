import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
    imports: [
        CommonModule,
        DetailRoutingModule,
    ],
    declarations: [DetailComponent]
})
export class DetailModule {}
