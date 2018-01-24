import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule'},
    { path: 'article', loadChildren: './article/article.module#ArticleModule' },
    { path: 'one-stop', loadChildren: './one-stop/one-stop.module#OneStopModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}