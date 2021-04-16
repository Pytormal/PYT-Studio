import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...list }) => {
    return <Route {...list} render={(props) => {
        if (localStorage.getItem('token')) {
            return <Component {...props} />
        }
        else {
            return <Redirect {...alert('please sign in first')} to='/login' />
        }
    }} />
}

export default PrivateRoute