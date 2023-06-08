import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imageUrl: string;
  public ingredients: Array<Ingredient>;

  constructor(
    name: string,
    description: string,
    imageUrl: string,
    ingredients: Array<Ingredient> = []
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
