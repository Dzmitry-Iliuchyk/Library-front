import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from '../../edit-book/components/edit-book/edit-book.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetBookEffect } from './store/effects/getBooks.effects';
import { bookReducer } from './store/reducer';
import { BookService } from '../services/book.service';
import { DeleteBookEffect } from './store/effects/deleteBook.effects copy';
import { TakeFreeBookModule } from "../take-free-book/take-free-book.module";
import { BookFormModule } from '../book-form/book-form.module';

const routes = [
  {
    path: 'details/:bookId',
    component: DetailsBookComponent,
  },

];

@NgModule({
  declarations: [ DetailsBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetBookEffect, DeleteBookEffect]),
    StoreModule.forFeature('book', bookReducer),
    TakeFreeBookModule,
    BookFormModule
],
  providers: [BookService],
})
export class BookModule {}
