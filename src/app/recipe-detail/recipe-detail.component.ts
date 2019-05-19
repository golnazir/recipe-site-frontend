import { Component, OnInit,Input } from '@angular/core';
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

  // @Input() 
  // oneRecipe:Recipe;
  
  oneRecipe$ :Observable<Recipe>;

  constructor(private recService: RecipeService,
      private activatedRoute: ActivatedRoute,
      private locatoin: Location
      ) { }

  ngOnInit() {
    // this.oneRecipe$ = this.recService.getRecipeDetails(1);

    this.getRecipeDetails();
  }

  getRecipeDetails(): void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log("** id = ", id);
    this.oneRecipe$ = this.recService.getRecipeDetails(id);
    
    
    // this.recService.getRecipeDetails(id)
    //   .subscribe(oneRec => console.log(oneRec));
    //   this.oneRecipe = oneRec
    // console.log(this.oneRecipe);

  }

  goBackToRec(): void{
    this.locatoin.back();
  }

}
