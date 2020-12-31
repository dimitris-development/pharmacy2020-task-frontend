import { fetchData } from '../helpers'
import { authActions } from '../actions'
import { userConstants } from "../constants";

const setUserInfo = (user) => ({
    type: userConstants.USER_SET_INFO,
    payload: {
        first_name: user.first_name,
        last_name : user.last_name
    }
})

const getUserInfo = () => {
    const tryGettingUserInfo = fetchData('GET',"http://localhost:8080/api/get_user_info", {}, true)
    return dispatch => {
        return dispatch({
            type: userConstants.USER_GET_INFO,
            payload: new Promise((resolve, reject) =>{
                tryGettingUserInfo.then(response => response.json())
                    .then(
                        (user) => {
                            dispatch(setUserInfo(user))
                        },
                        (error) => {
                            dispatch(authActions.authErrorReceived(error))
                        }
                    )
            })
        })
    }
}

export const userActions = {
    getUserInfo
}