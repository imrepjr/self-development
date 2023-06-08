import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  addIngredientEvent = new EventEmitter<Array<Ingredient>>();

  private ingredients: Array<Ingredient> = [
    new Ingredient('apples', 5),
    new Ingredient('tomato', 2),
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredientEvent.emit(this.getIngredients());
  }

  addIngredients(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
    this.addIngredientEvent.emit(this.getIngredients());
  }

  getIngredients() {
    return [...this.ingredients];
  }

  constructor() {}
}
