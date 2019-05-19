import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {RecipeService} from '../recipe.service';
import { Observable } from 'rxjs';

@Component({ 
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  selectedCategory: Category;
  categories$:Observable<Category[]>;

  constructor(private recService:RecipeService) { }

  ngOnInit() {
    this.categories$ = this.recService.getCategories();
   
  }

}
