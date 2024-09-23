import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { BackEndErrors } from "../../../types/BackEndErrors.interface";
import { Book } from "../../../books/types/booksResponce";

export const getBookAction = createAction(
  ActionTypes.GET_BOOK,
  props<{guid: string}>()
);

export const getBookSuccessAction = createAction(
  ActionTypes.GET_BOOK_SUCCESS,
  props<{ book: Book }>()
);

export const getBookFailureAction = createAction(
  ActionTypes.GET_BOOK_FAILURE,
  props<{ errors: BackEndErrors }>()
);
