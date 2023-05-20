import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output('onNavigation') navigationEvent = new EventEmitter<string>();

  handleNavigation(target: string) {
    this.navigationEvent.emit(target);
  }
}
