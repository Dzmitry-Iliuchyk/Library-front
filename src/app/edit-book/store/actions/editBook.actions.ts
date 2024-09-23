import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { BackEndErrors } from "../../../shared/types/BackEndErrors.interface";
import { BookInput } from "../../../shared/types/BookInput.interface";


export const editBookAction = createAction(
  ActionTypes.EDIT_BOOK,
  props<{guid: string, formData: FormData|null}>()
);

export const editBookSuccessAction = createAction(
  ActionTypes.EDIT_BOOK_SUCCESS
);

export const editBookFailureAction = createAction(
  ActionTypes.EDIT_BOOK_FAILURE,
  props<{ errors: BackEndErrors }>()
);
