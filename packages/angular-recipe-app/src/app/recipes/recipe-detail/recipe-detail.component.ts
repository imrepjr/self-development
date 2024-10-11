import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe?: Recipe;
  id?: number;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      const recipe = this.recipesService.getRecipe(this.id);

      if (!recipe) this.router.navigate(['/recipes']);

      this.selectedRecipe = recipe;
    });
  }

  addIngredients() {
    this.recipesService.addToShoppingList(this.selectedRecipe.ingredients);
  }
}
