import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { LoadingModule } from "../loading/loading.module";
import { BackendErrorsModule } from "../backend-errors/backend-errors.module";
import { PaginationModule } from '../pagination/pagination.module';
import { BooksService } from './Service/books.service';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetBooksEffect } from './store/effects/getBooks.effects';
import { RouterModule } from '@angular/router';
import { BookService } from '../services/book.service';



@NgModule({
  declarations: [
    BooksComponent
  ],
  exports:[BooksComponent],
  providers:[BooksService, BookService],
  imports: [
    CommonModule,
    LoadingModule,
    BackendErrorsModule,
    PaginationModule,
    RouterModule,
    EffectsModule.forFeature([GetBooksEffect]),
    StoreModule.forFeature('books', booksReducer),
]
})
export class BooksModule { }
