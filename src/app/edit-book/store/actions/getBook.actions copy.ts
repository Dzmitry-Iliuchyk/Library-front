import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { BackEndErrors } from "../../../shared/types/BackEndErrors.interface";
import { BookInput } from "../../../shared/types/BookInput.interface";
import { Book } from "../../../shared/books/types/booksResponce";


export const getEBookAction = createAction(
  ActionTypes.GET_BOOK,
  props<{guid: string}>()
);

export const getEBookSuccessAction = createAction(
  ActionTypes.GET_BOOK_SUCCESS,
  props<{book: Book}>()
);

export const getEBookFailureAction = createAction(
  ActionTypes.GET_BOOK_FAILURE,
  props<{ errors: BackEndErrors }>()
);
