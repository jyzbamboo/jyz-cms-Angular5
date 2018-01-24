import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';


@NgModule({
    imports: [
        CommonModule,
        SelectRoutingModule,
    ],
    declarations: [SelectComponent]
})
export class SelectModule {}
