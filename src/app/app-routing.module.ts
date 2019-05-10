import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoryComponent} from './category/category.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const allRoutes: Routes =[
  {path: 'category',  component: CategoryComponent},
  {path: '', redirectTo:'category', pathMatch:'full' },
  {path: 'recipes-list/:category', component:RecipesListComponent},
  {path: 'recipe-details/:id', component:RecipeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
