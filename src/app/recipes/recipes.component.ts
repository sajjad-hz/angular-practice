import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  clickedRecipe : Recipe

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe:Recipe) => {
      this.clickedRecipe = recipe
    })
  }
  
}
