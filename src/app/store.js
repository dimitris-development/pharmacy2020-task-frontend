import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer, errorUserReducer } from '../reducers'
import reduxPromise from 'redux-promise-middleware'

const errorsReducer = configureStore({
    user : errorUserReducer
})

const userReducer = configureStore({
    auth : authReducer
})
const store = configureStore({
    reducer: {
        user: userReducer,
        error: errorsReducer
    },
    middleware: [reduxPromise, ...getDefaultMiddleware()]
});

export default store