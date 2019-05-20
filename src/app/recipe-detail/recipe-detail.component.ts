import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';

import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  oneRecipe$ :Observable<Recipe>;

  constructor(private recService: RecipeService,
      private activatedRoute: ActivatedRoute,
      private locatoin: Location
      ) { }

  ngOnInit() {
    this.getRecipeDetails();
  }

  getRecipeDetails(): void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log("** id = ", id);
    this.oneRecipe$ = this.recService.getRecipeDetails(id);  
  }

  goBackToRec(): void{
    this.locatoin.back();
  }

}
