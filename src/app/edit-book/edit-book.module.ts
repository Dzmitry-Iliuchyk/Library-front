import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { RouterModule } from '@angular/router';
import { BookFormModule } from "../shared/book-form/book-form.module";
import { EffectsModule } from '@ngrx/effects';
import { GetEBookEffect } from './store/effects/getBook.effects';
import { EditBookEffect } from './store/effects/editBook.effects';
import { StoreModule } from '@ngrx/store';
import { editBookReducer } from './store/reducer';
import { BookService } from '../shared/services/book.service';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { CreateBookEffect } from './store/effects/createBook.effects copy';
import { createBookReducer } from './store/createBookReducer';


const routes = [
  {
    path: 'edit/:bookId',
    component: EditBookComponent,
  },
  {
    path: 'create',
    component: CreateBookComponent,
  },

];


@NgModule({
  declarations: [EditBookComponent, CreateBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([EditBookEffect, GetEBookEffect, CreateBookEffect]),
    StoreModule.forFeature('editBook', editBookReducer),
    StoreModule.forFeature('createBook', createBookReducer),
    BookFormModule
],
providers: [BookService],
})
export class EditBookModule { }
