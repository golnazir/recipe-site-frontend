import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';
import { filter , mergeMap, tap} from 'rxjs/operators';

import { Recipe} from './recipe';
import { RECIPES} from './mock-recipes';
import {Category} from './category';
import {CATEGORIES} from './mock-categories';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }
  
  getCategories():Observable<Category[]>{
    // const url =  'http://127.0.0.1:5000/api/category';
    const turl = '/api/category';
    return this.http.get<Category[]>(turl);
  }

  getRecipes(cat:string): Observable<Recipe[]> {
    // const url = `${"http://127.0.0.1:5000/api/recipes-list"}/${cat}`;
    const turl = `${"/api/recipes-list"}/${cat}`;
    return this.http.get<Recipe[]>(turl);   
  }

  getRecipeDetails(id: number): Observable<Recipe> {
      // const url = `${"http://127.0.0.1:5000/api/recipe-details"}/${id}`;
      const turl = `${"/api/recipe-details"}/${id}`;
      return this.http.get<Recipe>(turl);
  }

  // getCategory(cat: string):Observable<Category>{
    // const url = `${"http://127.0.0.1:5000/api/recipes-list"}/${cat}`;
    // return this.http.get<Category>(url);
    // // return of(RECIPES.filter((rec => rec.category === cat )));
  // }
  

}
