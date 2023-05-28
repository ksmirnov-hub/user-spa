import { createAction } from 'redux-actions'

export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST'
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE'

export const ERASE_USER_AUTH = 'ERASE_USER_AUTH'

export const CLEAR_ERRROR = 'CLEAR_ERROR';

export const userAuthSuccess = createAction(USER_AUTH_SUCCESS)
export const userAuthRequest = createAction(USER_AUTH_REQUEST)
export const userAuthFailure = createAction(USER_AUTH_FAILURE)

export const eraseUserAuth = createAction(ERASE_USER_AUTH)
export const clearError = createAction(CLEAR_ERRROR)

