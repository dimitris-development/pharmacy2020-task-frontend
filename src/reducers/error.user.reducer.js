import { errorConstants } from "../constants";

const initialState = {
    login_errors : {},
    auth_errors : {}
}

export function errorUserReducer(state = initialState, action) {
    switch (action.type) {
        case errorConstants.AUTHORIZATION_ERROR_ADD : {
            return {
                ...state,
                auth_errors: [
                    ...state.auth_errors,
                    {
                        ...action.payload.error
                    }
                ]
            }
        }
        case errorConstants.LOGIN_ERROR_ADD : {
            return {
                ...state,
                login_errors: [
                    ...state.login_errors,
                    {
                        ...action.payload.error
                    }
                ]
            }
        }
        case errorConstants.USER_ERRORS_DELETE_ALL : {
            return initialState
        }
        default : {
            return state
        }
    }
}