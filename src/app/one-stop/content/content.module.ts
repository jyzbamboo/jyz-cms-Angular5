import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';


@NgModule({
    imports: [
        CommonModule,
        ContentRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [ContentComponent]
})
export class ContentModule {}
