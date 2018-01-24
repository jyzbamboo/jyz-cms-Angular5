import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';


@NgModule({
    imports: [
        CommonModule,
        ListRoutingModule,
    ],
    declarations: [ListComponent]
})
export class ListModule {}
