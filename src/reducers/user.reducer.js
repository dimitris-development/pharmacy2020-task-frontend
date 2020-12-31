import { userConstants } from "../constants";

const initialState = {
    first_name: "",
    last_name: "",
}

export function userReducer (state = initialState, action) {
    switch (action.type) {
        case userConstants.USER_SET_INFO : {
            const user = action.payload
            return {
                first_name: user.first_name,
                last_name: user.last_name
            }
        }
        default : {
            return state
        }
    }
}