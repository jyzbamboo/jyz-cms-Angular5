import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';


@NgModule({
    imports: [
        CommonModule,
        CodeRoutingModule,
    ],
    declarations: [CodeComponent]
})
export class CodeModule {}
