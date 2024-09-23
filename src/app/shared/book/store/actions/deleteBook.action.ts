import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { BackEndErrors } from "../../../types/BackEndErrors.interface";

export const deleteBookAction = createAction(
    ActionTypes.DELETE_BOOK,
    props<{guid: string}>()
  );
  
  export const deleteBookSuccessAction = createAction(
    ActionTypes.DELETE_BOOK_SUCCESS
  );
  
  export const deleteBookFailureAction = createAction(
    ActionTypes.DELETE_BOOK_FAILURE,
    props<{ errors: BackEndErrors }>()
  );
  