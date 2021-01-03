import store from '../app/store'
export async function fetchData(method, url = '', data = {}, auth = false) {
    const authState = store.getState().auth
    const bearer_token = authState.access_token
    let response, bearerToken = 'Bearer ' + bearer_token
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