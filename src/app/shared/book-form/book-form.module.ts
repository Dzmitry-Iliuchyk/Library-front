import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form.component';
import { BackendErrorsModule } from "../backend-errors/backend-errors.module";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorsModule
],
exports: [BookFormComponent]
})
export class BookFormModule { }
