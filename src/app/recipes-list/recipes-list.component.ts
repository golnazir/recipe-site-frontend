import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';

import { Recipe} from '../recipe';
import {Category} from '../category';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  category$: Observable<Category>;
  allRecipes$: Observable<Recipe[]>;
  category:string;

  constructor(private recService: RecipeService,
      private activatedRoute: ActivatedRoute,
      private location: Location
      ) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    this.getAllRecipes();
    this.getCategory();
  }

  getAllRecipes(): void{
    // const cat = this.activatedRoute.snapshot.paramMap.get('category');
    // console.log("category: ", this.category, " and cat: " , cat);
    this.allRecipes$ = this.recService.getRecipes(this.category);
    
  }

  getCategory(): void{
   this.category$ = this.recService.getCategory(this.category);
  }

  goBackToCat(): void{
    this.location.back();
  }
}
