import { routerNavigationAction } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { CreateBookState } from "../types/CreateBookState";
import { createBookAction, createBookSuccessAction, createBookFailureAction } from "./actions/createBook.actions copy";

const initialStateCreateBook: CreateBookState = {
  errors: null,
  isLoading: false,
  isSubmitting: false
};


export const createBookReducer = createReducer(
  initialStateCreateBook,
  on(
    createBookAction,
    (state): CreateBookState => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
      errors: null,
    })
  ),
  on(
    createBookSuccessAction,
    (state, action): CreateBookState => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
    })
  ),
  on(
    createBookFailureAction,
    (state, action): CreateBookState => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      errors: action.errors,
    })
  ),
  on(
    routerNavigationAction,
    (state): CreateBookState => (state = initialStateCreateBook)
  )
);
