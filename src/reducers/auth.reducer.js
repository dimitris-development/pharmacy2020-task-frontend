import { authConstants } from "../constants";

const initialState = {
    loggedIn : false,
    access_token: "",
    refresh_token: "",
}

export function authReducer(state = initialState, action){
    switch (action.type) {
        case authConstants.LOGGED_IN : {
            const user = action.payload
            return {
                ...state,
                loggedIn: true,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            }
        }
        case authConstants.LOGGED_OUT : {
            return initialState
        }
        default: {
            return state
        }
    }
}