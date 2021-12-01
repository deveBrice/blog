import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/:id', component: ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
