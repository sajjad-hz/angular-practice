import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount : ElementRef
  // @Output() shoppingList  = new EventEmitter<Ingredient>()

  constructor(private shoppingListService: ShoppingListService){}

  onSubmit() {
    const ingName = this.inputName?.nativeElement.value
    const ingAmount = this.inputAmount?.nativeElement.value
    const newIng = new Ingredient(ingName,ingAmount)
    this.shoppingListService.addIngredint(newIng)
    // this.shoppingList.emit(newIng)
  }
}
