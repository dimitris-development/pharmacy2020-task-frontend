import { errorConstants } from '../constants'

const addAuthError = ( error ) => ({
    type: errorConstants.AUTHORIZATION_ERROR_ADD,
    payload: error
})

const addLoginError = ( error ) => ({
    type: errorConstants.LOGIN_ERROR_ADD,
    payload: error
})

const deleteAllUserErrors = () => ({
    type: errorConstants.USER_ERRORS_DELETE_ALL
})

export const errorUserActions = {
    addAuthError,
    addLoginError,
    deleteAllUserErrors
}