import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingLService: ShoppingListService) {}

  addToSL(ingredients: Ingredient[]) {
    // ingredients.map(( ing: Ingredient) => {
    //   this.shoppingLService.addIngredint(ing)
    // })
    this.shoppingLService.addIngredints(ingredients)
  }
}
