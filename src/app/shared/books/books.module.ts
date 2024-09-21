import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { LoadingModule } from "../loading/loading.module";
import { BackendErrorsModule } from "../backend-errors/backend-errors.module";
import { PaginationModule } from '../pagination/pagination.module';
import { BookService } from './Service/books.service';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetBooksEffect } from './store/effects/getBooks.effects';



@NgModule({
  declarations: [
    BooksComponent
  ],
  exports:[BooksComponent],
  providers:[BookService],
  imports: [
    CommonModule,
    LoadingModule,
    BackendErrorsModule,
    PaginationModule,
    EffectsModule.forFeature([GetBooksEffect]),
    StoreModule.forFeature('books', bookReducer),
]
})
export class BooksModule { }
