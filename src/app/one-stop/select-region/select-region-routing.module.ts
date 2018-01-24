import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectRegionComponent } from './select-region.component';

const routes: Routes = [
    {
        path: '', component: SelectRegionComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectRegionRoutingModule {}
