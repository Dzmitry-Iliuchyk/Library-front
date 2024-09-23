import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { BackEndErrors } from "../../../shared/types/BackEndErrors.interface";
import { BookInput } from "../../../shared/types/BookInput.interface";


export const createBookAction = createAction(
  ActionTypes.CREATE_BOOK,
  props<{ formData: FormData }>()
);

export const createBookSuccessAction = createAction(
  ActionTypes.CREATE_BOOK_SUCCESS
);

export const createBookFailureAction = createAction(
  ActionTypes.CREATE_BOOK_FAILURE,
  props<{ errors: BackEndErrors }>()
);
