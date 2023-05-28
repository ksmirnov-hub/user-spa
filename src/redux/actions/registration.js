import { createAction } from 'redux-actions'

export const ADD_USER_DATA_SUCCESS = 'ADD_USER_DATA_SUCCESS'
export const ADD_USER_DATA_REQUEST = 'ADD_USER_DATA_REQUEST'
export const ADD_USER_DATA_FAILURE = 'ADD_USER_DATA_FAILURE'

export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS'
export const UPDATE_USER_DATA_REQUEST = 'UPDATE_USER_DATA_REQUEST'
export const UPDATE_USER_DATA_FAILURE = 'UPDATE_USER_DATA_FAILURE'

export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'


export const addUserDataSuccess = createAction(ADD_USER_DATA_SUCCESS)
export const addUserDataRequest = createAction(ADD_USER_DATA_REQUEST)
export const addUserDataFailure = createAction(ADD_USER_DATA_FAILURE)

export const updateUserDataSuccess = createAction(UPDATE_USER_DATA_SUCCESS)
export const updateUserDataRequest = createAction(UPDATE_USER_DATA_REQUEST)
export const updateUserDataFailure = createAction(UPDATE_USER_DATA_FAILURE)

export const clearMessage = createAction(CLEAR_MESSAGE)