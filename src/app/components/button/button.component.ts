import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {



  // @Input permite receber um valor do componente pai 
  // nesse caso o pai é app.component.html
  @Input({ required: true, alias: 'text' })
  buttonText: string = '';

  @Input({ required: true, alias: 'style' })
  buttonStyle: 'white' | 'purple' = 'white';

  @Input({ alias: 'disabled' })
  isDisabled: boolean = false;

  // @Output permite enviar um evento ao componente pai 
  // nesse caso o pai é app.component.html
  @Output('clicked')
  buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit()
  }
}
