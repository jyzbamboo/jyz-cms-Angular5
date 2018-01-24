import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { WaterfallComponent } from './waterfall/Waterfall.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
    ],
    declarations: [LayoutComponent,WaterfallComponent]
})
export class LayoutModule {}
