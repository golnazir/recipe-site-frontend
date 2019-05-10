import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {RecipeService} from '../recipe.service';

@Component({ 
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategory: Category;
  categories:Category[];

  constructor(private recService:RecipeService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void{
    this.recService.getCategories().subscribe(c => this.categories = c);
  }
}
