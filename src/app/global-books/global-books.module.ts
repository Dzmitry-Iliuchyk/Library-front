import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBooksComponent } from './global-books/global-books.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BackendErrorsModule } from '../shared/backend-errors/backend-errors.module';

@NgModule({
  declarations: [GlobalBooksComponent],
  imports: [
    CommonModule,
    FormsModule,
    BackendErrorsModule,
  ],
  exports: [GlobalBooksComponent],
})
export class GlobalBooksModule {}
