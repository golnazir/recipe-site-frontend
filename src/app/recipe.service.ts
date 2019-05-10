import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';

import { Recipe} from './recipe';
import { RECIPES} from './mock-recipes';
import {Category} from './category';
import {CATEGORIES} from './mock-categories';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  
  getRecipes(cat: string):Observable<Recipe[]>{
    return of(RECIPES.filter((rec => rec.category === cat )));
  }
  
  getRecipeDetails(id: number): Observable<Recipe> {
    return of(RECIPES.find(oneRec => oneRec.id === id));
  }

  getCategories():Observable<Category[]>{
    return of(CATEGORIES);
  }

  getCategory(cat:string): Observable<Category> {
    return of(CATEGORIES.find(oneCat => oneCat.category === cat));
  }

  // isCategoryMatch()
  // function isBigEnough(element, index, array) { 
  //   return (element >= 10); 
//  } 


}
