import { userConstants } from "../constants";

const initialState = {
    loggedIn : false,
    access_token: "",
    refresh_token: "",
}

export default function userAuthReducer(state = initialState, action){
    switch (action.type) {
        case userConstants.LOGGED_IN : {
            const user = action.payload
            return {
                ...state,
                loggedIn: true,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            }
        }
        case userConstants.LOGGGED_OUT : {
            return initialState
        }
        default: {
            return state
        }
    }
}