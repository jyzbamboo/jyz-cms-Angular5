import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneStopComponent } from './one-stop.component';

const routes: Routes = [
    {
        path: '',
        component: OneStopComponent,
        children: [
            { path: '', redirectTo: 'index' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'select', loadChildren: './select/select.module#SelectModule' },
            { path: 'select-region', loadChildren: './select-region/select-region.module#SelectRegionModule' },
            { path: 'content', loadChildren: './content/content.module#ContentModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OneStopRoutingModule {}
