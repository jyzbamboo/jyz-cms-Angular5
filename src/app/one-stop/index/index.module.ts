import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
    imports: [
        CommonModule,
        IndexRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [IndexComponent]
})
export class IndexModule {}
