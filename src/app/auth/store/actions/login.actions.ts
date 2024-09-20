import { createAction, props } from '@ngrx/store';
import { CurrentUser } from '../../../shared/types/CurrentUser.interface';
import { ActionTypes } from '../actionTypes';
import { LoginRequest } from '../../types/loginRequest.interface';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';


export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackEndErrors }>()
);


