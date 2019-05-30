import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoryComponent} from './category/category.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const allRoutes: Routes =[
  {path: '',   redirectTo:'category', pathMatch:'full' },
  {path: 'category',  component: CategoryComponent,
    data: {
      title: 'category',
      breadcrumb: [{label:'Category', url: ''}]
    }
  },
  {path: 'category/recipes-list/:category', component:RecipesListComponent,
    data: {
      title: 'Recipes-list',
      breadcrumb:[
        {label: 'Category', url: '/category'},
        {label: 'Recipes-{{category}}', url: ''}
      ]
    },
  },
  {path: 'category/recipes-list/:category/recipe-details/:id', component:RecipeDetailComponent,
    data: {
      title: 'Recipe-details',
      breadcrumb:[
        {label: 'Category', url: '/category'},
        {label: 'Recipes', url: '/category/recipes-list/:category'},
        {label: 'Instructions', url: ''}
      ]
    },

  }
];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  static components = [
    CategoryComponent,
    RecipesListComponent,
    RecipeDetailComponent
];
}
