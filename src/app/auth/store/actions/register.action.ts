import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { RegisterRequest } from '../../types/registerRequest.interface';
import { CurrentUser } from '../../../shared/types/CurrentUser.interface';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';


export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequest }>()
);
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS
);
export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackEndErrors}>()
);
