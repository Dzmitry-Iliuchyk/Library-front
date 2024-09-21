import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../types/authState.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.actions";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "./actions/getCurrentUser.actions";
import { logOutAction } from "./actions/logOut.action";
import { loginByRefreshAction, loginByRefreshFailureAction, loginByRefreshSuccessAction } from "./actions/loginByRefreshAction";

const initialState: AuthState = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
    isLoading: false,
    isAdmin: false
  };
  
  export const authReducer = createReducer(
    initialState,
    on(
      registerAction,
      (state): AuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null,
      })
    ),
    on(
      registerSuccessAction,
      (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        
      })
    ),
    on(
      registerFailureAction,
      (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: false,
        validationErrors: action.errors,
      })
    ),
    on(
      loginAction,
      (state): AuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null,
      })
    ),
    on(
      loginSuccessAction,
      (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
      })
    ),
    on(loginFailureAction, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      validationErrors: action.errors,
    })),
    on(getCurrentUserAction, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(getCurrentUserSuccessAction, (state, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
      isAdmin: action.currentUser.isAdmin
    })),
    on(getCurrentUserFailureAction, (state) => ({
      ...state,
      isLoading: false,
      currentUser: null,
      isLoggedIn: false,
      isAdmin: false
    })),
    on(
      logOutAction,
      (): AuthState => ({
        ...initialState,
        isLoggedIn: false,
      })
    ),
    on(
      loginByRefreshAction,
      (): AuthState => ({
        ...initialState,
        isSubmitting: true,
        isLoggedIn: false,
      })
    ),
    on(
      loginByRefreshSuccessAction,
      (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
      })
    ),
    on(loginByRefreshFailureAction, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
    })),
  );
  