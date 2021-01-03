import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = ({ component, ...rest }) => {
    const isLoggedIn = rest.auth.loggedIn
    return (
        <Route {...rest} exact
               render = {
                   (props) => (
                   isLoggedIn ?
                       (
                           <div>
                               {React.createElement(component, props)}
                           </div>
                       ) :
                       (
                           <Redirect
                               to={{
                                   pathname: '/login',
                                   state: { from: props.location }
                               }}
                           />
                       )
               )}
        />
    )

}

function mapStateToProps(state) {
    console.log(state)
    const { auth } = state.auth
    return { auth: {...auth} }
}

const connectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)
export { connectedPrivateRoute as PrivateRoute }