import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Array<Recipe> = [
    new Recipe(
      'Veggies',
      'Delicious veggies',
      'https://unsplash.com/photos/uQs1802D0CQ'
    ),
  ];
}
