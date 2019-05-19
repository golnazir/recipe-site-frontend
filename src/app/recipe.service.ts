import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';

import { Recipe} from './recipe';
import {Category} from './category';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  turl = "http://127.0.0.1:5000/"   //for local use
  // turl = "/api/";                //for deployment use
  constructor(private http:HttpClient) { }
  
  getCategories():Observable<Category[]>{
    const url = this.turl+"category";
    return this.http.get<Category[]>(url);
  }

  getRecipes(cat:string): Observable<Recipe[]> {
    const url = `${this.turl+"recipes-list"}/${cat}`;
    return this.http.get<Recipe[]>(url);   
  }

  getRecipeDetails(id: number): Observable<Recipe> {
      const url = `${this.turl+ "recipe-details"}/${id}`;
      return this.http.get<Recipe>(url);
  }

  getCategory(cat: string):Observable<Category>{
    const url = `${this.turl+"category"}/${cat}`;
    return this.http.get<Category>(url);
    // const url = `${"http://127.0.0.1:5000/api/recipes-list"}/${cat}`;
    // return this.http.get<Category>(url);
    // // return of(RECIPES.filter((rec => rec.category === cat )));
  }
  

}
