import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'COCO',
      'we amke it',
      'https://chishi.ir/wp-content/uploads/2021/09/kookoo-sibzamini-havij.jpg',
      [new Ingredient('sibZamini', 1), new Ingredient('egg', 2)]
    ),
    new Recipe(
      'COCO sabzi',
      'we amke it',
      'https://fae-magazine.com/wp-content/uploads/2014/07/kuku-sabzi-2-1024x768.jpg',
      [new Ingredient('veg', 3), new Ingredient('egg', 4)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
