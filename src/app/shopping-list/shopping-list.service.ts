import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  onAddNewIng = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('potato', 2),
    new Ingredient('sabzi', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredint(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onAddNewIng.emit(this.ingredients.slice());
  }

  addIngredints(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.onAddNewIng.emit(this.ingredients.slice());
  }
}
