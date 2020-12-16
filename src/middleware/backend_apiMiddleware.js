const backend_apiMiddleware = storeAPI => next => action => {
    switch(action.type) {
        case 'user/login' : {
            const data = {
                email: action.payload.email,
                password: action.payload.password
            }
            fetchData('POST',"http://localhost:8080/api/login", data)
                .then(response => response.json())
                .then((data) => {
                    //TODO: Save data received (access-token) and dispatch new action (user/getUserInfo)
                })
                .catch((error) => {
                    //TODO: Save error received and dispatch new action (user/loginErrorReceived)
                })
        }
        case 'user/getUserInfo' : {
            fetchData('GET',"http://localhost:8080/api/get_user_info", {}, true)
                .then(response => response.json())
                .then((data) => {
                    //TODO: Save data received
                })
                .catch((error) => {
                    //TODO: Save error received and dispatch new action (user/authErrorReceived)
                })
        }
        case 'user/logout' : {
            fetchData('POST',"http://localhost:8080/api/logout", {}, true)
                .then(response => response.json())
                .then((data) => {
                    //TODO: Save data received and dispatch new action (user/loggedOut)
                })
                .catch((error) => {
                    //TODO: Save error received and dispatch new action (user/authErrorReceived)
                })
        }
        case 'user/refresh_token' : {
            const data = {
                refresh_token: action.payload.refresh_token
            }
            fetchData('GET',"http://localhost:8080/api/refresh_token", data)
                .then(response => response.json())
                .then((data) => {
                    //TODO: Save data received (access-token)
                })
                .catch((error) => {
                    //TODO: Save error received and dispatch new action (user/authErrorReceived)
                })
        }
        default : {
            return next(action)
        }
    }

}

async function fetchData(method, url = '', data = {}, auth = false) {
    let response, bearerToken = 'Bearer' //TODO: Get Bearer from store
    const defaultOptions = {
        method: method,
        mode: 'cors',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'error',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    }
    if (auth){
        response = await fetch(url,{
            ...defaultOptions,
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + bearerToken,
            }
        })
    } else {
        response = await fetch(url, defaultOptions);
    }

    return response.json();
}