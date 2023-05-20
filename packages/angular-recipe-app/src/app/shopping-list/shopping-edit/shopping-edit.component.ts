import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output('onAddIngredient') addIngredientEvent =
    new EventEmitter<Ingredient>();

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = +this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);

    this.addIngredientEvent.emit(newIngredient);
  }
}
