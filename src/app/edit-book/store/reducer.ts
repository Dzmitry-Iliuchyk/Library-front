import { createReducer, on } from '@ngrx/store';

import { routerNavigationAction } from '@ngrx/router-store';
import { EditBookState } from '../types/EditBookState.interface';
import { getEBookAction, getEBookFailureAction, getEBookSuccessAction } from './actions/getBook.actions copy';
import { editBookAction, editBookFailureAction, editBookSuccessAction } from './actions/editBook.actions';


const initialState: EditBookState = {
  book: null,
  errors: null,
  isLoading: false,
  isSubmitting: false
};

export const editBookReducer = createReducer(
  initialState,
  on(
    getEBookAction,
    (state): EditBookState => ({
      ...state,
      isLoading: true,
      errors: null,
    })
  ),
  on(
    getEBookSuccessAction,
    (state, action): EditBookState => ({
      ...state,
      isLoading: false,
      book: action.book,
    })
  ),
  on(
    getEBookFailureAction,
    (state, action): EditBookState => ({
      ...state,
      isLoading: false,
      errors: action.errors,
      book: null,
    })
  ),
  on(
    editBookAction,
    (state): EditBookState => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
      errors: null,
    })
  ),
  on(
    editBookSuccessAction,
    (state, action): EditBookState => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
    })
  ),
  on(
    editBookFailureAction,
    (state, action): EditBookState => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      errors: action.errors,
    })
  ),
  on(
    routerNavigationAction,
    (state): EditBookState => (state = initialState)
  )
);
