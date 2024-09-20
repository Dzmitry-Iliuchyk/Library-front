import { createAction, props } from "@ngrx/store";
import { BackEndErrors } from "../../../shared/types/BackEndErrors.interface";
import { ActionTypes } from "../actionTypes";


export const loginByRefreshAction = createAction(
  ActionTypes.LOGIN_BY_REFRESH
);

export const loginByRefreshSuccessAction = createAction(
  ActionTypes.LOGIN_BY_REFRESH_SUCCESS
);

export const loginByRefreshFailureAction = createAction(
  ActionTypes.LOGIN_BY_REFRESH_FAILURE,
  props<{ errors: BackEndErrors; }>()
);
