export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  LOGIN_BY_REFRESH = '[Auth] Login by refresh token',
  LOGIN_BY_REFRESH_SUCCESS = '[Auth] Login by refresh token success',
  LOGIN_BY_REFRESH_FAILURE = '[Auth] Login by refresh token failure',

  GET_CURRENT_USER = '[Auth] GetCurrentUser',
  GET_CURRENT_USER_SUCCESS = '[Auth] GetCurrentUser success',
  GET_CURRENT_USER_FAILURE = '[Auth] GetCurrentUser failure',

  LOGOUT = '[Auth] Logout',
}
