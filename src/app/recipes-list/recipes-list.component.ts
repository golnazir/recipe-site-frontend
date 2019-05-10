import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import { Recipe} from '../recipe';
import {Category} from '../category';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  category: Category;
  allRecipes: Recipe[];

  constructor(private recService: RecipeService,
      private activatedRoute: ActivatedRoute,
      private location: Location
      ) { }

  ngOnInit() {
    this.getAllRecipes();
    this.getCategory();
  }

  getAllRecipes(): void{
    const cat = this.activatedRoute.snapshot.paramMap.get('category');
    this.recService.getRecipes(cat)
      .subscribe(r => this.allRecipes =r);
  }

  getCategory(): void{
    const cat = this.activatedRoute.snapshot.paramMap.get('category');
    this.recService.getCategory(cat)
      .subscribe(c => this.category = c);
  }

  goBackToCat(): void{
    this.location.back();
  }
}
