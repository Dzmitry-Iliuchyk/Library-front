import { createAction } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';


export const logOutAction = createAction(ActionTypes.LOGOUT);
