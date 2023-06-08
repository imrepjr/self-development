import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe?: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.selectRecipeEvent.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  addIngredients() {
    this.recipesService.addToShoppingList(this.selectedRecipe.ingredients);
  }
}
