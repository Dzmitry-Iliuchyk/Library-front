import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { BackEndErrors } from '../../../types/BackEndErrors.interface';

export const takeBookAction = createAction(
  ActionTypes.TAKE_BOOK,
  props<{ bookId: string }>()
);
export const takeBookSuccessAction = createAction(
  ActionTypes.TAKE_BOOK_SUCCESS
);
export const takeBookFailureAction = createAction(ActionTypes.TAKE_BOOK_FAILURE,
  props<{ errors: BackEndErrors }>());

export const freeBookAction = createAction(
  ActionTypes.FREE_BOOK,
  props<{ bookId: string }>()
);
export const freeBookSuccessAction = createAction(
  ActionTypes.FREE_BOOK_SUCCESS
);
export const freeBookFailureAction = createAction(ActionTypes.FREE_BOOK_FAILURE,
  props<{ errors: BackEndErrors }>());
