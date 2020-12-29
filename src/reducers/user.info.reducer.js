import { userConstants } from "../constants";

const initialState = {
    first_name: "",
    last_name: "",
}

export function userInfoReducer (state = initialState, action) {
    switch (action.type) {
        case userConstants.USER_SET_INFO : {
            const user = action.payload
            return {
                firstName: user.firstName,
                lastName: user.lastName
            }
        }
        default : {
            return state
        }
    }
}