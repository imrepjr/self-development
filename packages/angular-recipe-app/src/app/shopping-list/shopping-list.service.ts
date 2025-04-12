import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  addIngredientEvent = new Subject<Array<Ingredient>>();

  private ingredients: Array<Ingredient> = [
    new Ingredient('apples', 5),
    new Ingredient('tomato', 2),
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredientEvent.next(this.getIngredients());
  }

  addIngredients(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
    this.addIngredientEvent.next(this.getIngredients());
  }

  getIngredients() {
    return [...this.ingredients];
  }

  constructor() {}
}
