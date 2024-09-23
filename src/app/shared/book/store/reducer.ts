import { createReducer, on } from '@ngrx/store';

import { routerNavigationAction } from '@ngrx/router-store';
import { BookDetailsState } from './types/BookDetailsState.interface';
import {
  getBookAction,
  getBookFailureAction,
  getBookSuccessAction,
} from './actions/getBooks.actions';

const initialState: BookDetailsState = {
  book: null,
  errors: null,
  isLoading: false,
};

export const bookReducer = createReducer(
  initialState,
  on(
    getBookAction,
    (state): BookDetailsState => ({
      ...state,
      isLoading: true,
      errors: null,
      book: null,
    })
  ),
  on(
    getBookSuccessAction,
    (state, action): BookDetailsState => ({
      ...state,
      isLoading: false,
      book: action.book,
    })
  ),
  on(
    getBookFailureAction,
    (state, action): BookDetailsState => ({
      ...state,
      isLoading: false,
      errors: action.errors,
      book: null,
    })
  ),
  on(
    routerNavigationAction,
    (state): BookDetailsState => (state = initialState)
  )
);
