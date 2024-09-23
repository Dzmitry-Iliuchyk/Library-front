import { createSelector } from "@ngrx/store";
import { AppState } from "../../shared/types/AppState.interface";
import { AuthState } from "../types/authState.interface";

export const authFeatureSelector = (state: AppState): AuthState => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);

export const BackendErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationErrors
);

export const IsLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn
);

export const IsAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn === false
);

export const CurrentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentUser
);

export const isAdminSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isAdmin
);

export const currentUserIdSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentUser.guid
);
