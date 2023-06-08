import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  selectRecipeEvent = new EventEmitter<Recipe>();
  private recipes: Array<Recipe> = [
    new Recipe(
      'Veggies',
      'Delicious veggies',
      'https://unsplash.com/photos/uQs1802D0CQ',
      [
        new Ingredient('tomato', 4),
        new Ingredient('carrot', 5),
        new Ingredient('potato', 2),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  selectRecipe(recipe: Recipe) {
    this.selectRecipeEvent.emit(recipe);
  }

  addToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
