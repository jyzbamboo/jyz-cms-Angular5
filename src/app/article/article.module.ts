import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { HeaderModule } from '../shared';


@NgModule({
    imports: [
        CommonModule,
        ArticleRoutingModule,
        HeaderModule
    ],
    declarations: [ArticleComponent]
})
export class ArticleModule {}
