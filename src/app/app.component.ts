import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rick-and-morty-case';
  selectedTab: number = 0;

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
