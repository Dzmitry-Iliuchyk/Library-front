import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsComponent } from './backend-errors/backend-errors.component';



@NgModule({
  declarations: [
    BackendErrorsComponent
  ],
  exports:[BackendErrorsComponent],
  imports: [
    CommonModule
  ]
})
export class BackendErrorsModule { }
