import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Recipe} from './recipe';
import {Category} from './category';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private  turl = "http://127.0.0.1:5000/"   //for local use
  // private  turl = "/api/";                      //for deployment use

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
  }
  
  //   /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
 
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);
 
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
