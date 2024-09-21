import { createReducer, on } from '@ngrx/store';
import { BooksState } from '../types/BooksState.interface';
import {
  getBooksAction,
  getBooksFailureAction,
  getBooksSuccessAction,
} from './actions/getBooks.actions';
import { count } from 'rxjs';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: BooksState = {
  books: null,
  errors: null,
  isLoading: false,
  count: null,
};

export const bookReducer = createReducer(
  initialState,
  on(
    getBooksAction,
    (state): BooksState => ({
      ...state,
      isLoading: true,
      errors: null,
    })
  ),
  on(
    getBooksSuccessAction,
    (state, action): BooksState => ({
      ...state,
      isLoading: false,
      books: action.books.books,
      count: action.books.count,
    })
  ),
  on(
    getBooksFailureAction,
    (state, action): BooksState => ({
      ...state,
      isLoading: false,
      errors: action.errors,
    })
  ),
  on(routerNavigationAction, (): BooksState => initialState)
);
