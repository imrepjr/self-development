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
    new Recipe('Veggies', 'Delicious veggies', 'broken-url', [
      new Ingredient('tomato', 4),
      new Ingredient('carrot', 5),
      new Ingredient('potato', 2),
    ]),
    new Recipe('Veggies 2', 'Delicious veggies number 2', 'broken-url', [
      new Ingredient('tomato', 5),
      new Ingredient('carrot', 6),
      new Ingredient('potato', 7),
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number): Recipe | undefined {
    return this.recipes[id];
  }

  selectRecipe(recipe: Recipe) {
    this.selectRecipeEvent.emit(recipe);
  }

  addToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
