import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';

const routes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            { path: '', redirectTo: 'list' },
            { path: 'list', loadChildren: './list/list.module#ListModule' },
            { path: 'detail', loadChildren: './detail/detail.module#DetailModule' },
            { path: 'weather', loadChildren: './weather/weather.module#WeatherModule' },
            { path: 'code', loadChildren: './code/code.module#CodeModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule {}
