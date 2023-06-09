import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-recipe-app';
  activePage = 'recipes';

  setActivePage(newPage: string) {
    this.activePage = newPage;
  }
}
