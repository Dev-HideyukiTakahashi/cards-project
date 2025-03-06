import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  onCardButtonClicked() {
    console.log('onCardButtonClicked')
  }

  name: string = 'Maria';

  // NgIf
  minhaProp = true;
  minhaProp2 = true;

  toggleProp() {
    this.minhaProp = !this.minhaProp;
  }

  toggleContainer() {
    this.minhaProp2 = !this.minhaProp2;
  }
}
