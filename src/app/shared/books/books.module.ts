import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { LoadingModule } from "../loading/loading.module";
import { BackendErrorsModule } from "../backend-errors/backend-errors.module";
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    BackendErrorsModule,
    PaginationModule
]
})
export class BooksModule { }
