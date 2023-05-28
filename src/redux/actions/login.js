import { createAction } from 'redux-actions'

export const CHECK_CREDENTIALS_SUCCESS = 'CHECK_CREDENTIALS_SUCCESS'
export const CHECK_CREDENTIALS_REQUEST = 'CHECK_CREDENTIALS_REQUEST'
export const CHECK_CREDENTIALS_FAILURE = 'CHECK_CREDENTIALS_FAILURE'


export const checkCredentialsSuccess = createAction(CHECK_CREDENTIALS_SUCCESS)
export const checkCredentialsRequest = createAction(CHECK_CREDENTIALS_REQUEST)
export const checkCredentialsFailure = createAction(CHECK_CREDENTIALS_FAILURE)