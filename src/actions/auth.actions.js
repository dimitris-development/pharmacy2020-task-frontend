import { fetchData } from '../helpers'
import { errorUserActions } from './error.user.actions'
import { authConstants, errorCodes } from '../constants'
import store from '../app/store';

const loggedIn = (data) => ({
    type: authConstants.LOGGED_IN,
    payload: data
})

const loggedOut = () => ({
    type: authConstants.LOGGED_OUT
})

const refreshToken = () => {
    const authState = store.getState().auth
    const refresh_token = authState.refresh_token
    const data = {
        refresh_token: refresh_token
    }
    const tryRefreshingToken = fetchData('GET',"http://localhost:8080/api/refresh_token", data)
    return dispatch => {
        return dispatch({
            type    : authConstants.REFRESH_TOKEN,
            payload : new Promise((resolve, reject) => {
                tryRefreshingToken.then(response => response.json())
                    .then(
                        (response) => {
                            dispatch(loggedIn(response))
                            resolve('Successfully logged in!')
                        },
                        (error) => {
                            dispatch(authErrorReceived(error))
                            reject(error.reason)
                        }
                    )
            })
        })
    }
}

const authErrorReceived = (error) => {
    const error_id = parseInt(error.error_id)
    errorUserActions.addLoginError(error)
    return dispatch => {
        return dispatch({
            type   : authConstants.ERROR_RECEIVED,
            payload: new Promise((resolve, reject) => {
                switch (error_id) {
                    case errorCodes.AUTH_EXPIRED_ACCESS_TOKEN : {
                        dispatch(refreshToken())
                        resolve()
                        break;
                    }
                    case errorCodes.AUTH_EXPIRED_REFRESH_TOKEN :
                    case errorCodes.AUTH_INVALID_GRANT :
                    default: {
                        dispatch(loggedOut())
                        reject()
                    }
                }
            })
        })
    }

}

const login = (data) => {
    const tryLogin = fetchData('POST', 'http://localhost:8080/api/login', data);
    return dispatch => {
        return dispatch({
            type: authConstants.LOGIN,
            payload: new Promise((resolve, reject) => {
                tryLogin.then(response => response.json())
                    .then(
                        (response) => {
                            dispatch(errorUserActions.deleteAllUserErrors())
                            dispatch(loggedIn(response))
                            resolve('Successfully logged in!')
                        },
                        (error) => {
                            dispatch(authErrorReceived(error))
                            reject()
                        }
                    )
            })
        })
    }
}

const logout = () => {
    const tryLogout = fetchData('POST',"http://localhost:8080/api/logout", {}, true);
    return dispatch => {
        return dispatch({
            type: authConstants.LOGOUT,
            payload: new Promise((resolve, reject) => {
                tryLogout.then(response => response.json())
                    .then(
                        (response) => {
                            dispatch(loggedOut(response))
                            resolve('Successfully logged out')
                        },
                        (error) => {
                            dispatch(authErrorReceived(error))
                            reject('Could not log out')
                        }
                    )
            })
        })
    }
}

export const authActions = {
    login,
    logout,
    refreshToken,
    authErrorReceived
}