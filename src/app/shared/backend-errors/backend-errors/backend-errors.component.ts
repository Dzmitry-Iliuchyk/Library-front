import { Component, Input } from '@angular/core';
import { BackEndErrors } from '../../types/BackEndErrors.interface';

@Component({
  selector: 'Lib-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrl: './backend-errors.component.scss'
})
export class BackendErrorsComponent {
  @Input('BackendErrors') backendErrorsProps: BackEndErrors;

  errorMesages: string[];

  ngOnInit() {
    this.errorMesages = this.backendErrorsProps.messages;
  }
}
