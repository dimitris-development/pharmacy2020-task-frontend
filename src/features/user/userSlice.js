const initialState = {
    loggedIn : false,
    accessToken: "",
    firstName: "",
    lastName: ""
}

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case 'user/loggedIn' : {
            const user = action.payload
            return {
                ...state,
                loggedIn: true,
                accessToken: user.accessToken,
                firstName: user.firstName,
                lastName: user.lastName
            }
        }
        case 'user/loggedOut' : {
            return initialState
        }
        default: {
            return state
        }
    }
}