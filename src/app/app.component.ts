import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onCardButtonClicked() {
    console.log('onCardButtonClicked');
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

  // NgFor
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Maria Silva', age: 50 },
    { name: 'Fulano Silva', age: 32 },
    { name: 'João Nascimento', age: 72 },
    { name: 'Astolfo Celestino', age: 38 },
  ];

  // aplica a cor verde no item clicado
  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }
}
