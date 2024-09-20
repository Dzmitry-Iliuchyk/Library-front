import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { CurrentUser } from "../../../shared/types/CurrentUser.interface";

export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
