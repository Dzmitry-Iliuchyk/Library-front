import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { BooksRequest } from "../../types/BooksRequest.intrface";
import { BooksResponse } from "../../types/booksResponce";
import { BackEndErrors } from "../../../types/BackEndErrors.interface";

export const getBooksAction = createAction(
  ActionTypes.GET_BOOKS,
  props<{url: string, request: BooksRequest}>()
);

export const getBooksSuccessAction = createAction(
  ActionTypes.GET_BOOKS_SUCCESS,
  props<{ books: BooksResponse }>()
);

export const getBooksFailureAction = createAction(
  ActionTypes.GET_BOOKS_FAILURE,
  props<{ errors: BackEndErrors }>()
);
