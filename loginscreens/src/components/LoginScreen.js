import React from 'react'
import Logo from './Logo'
import LoginButtons from './LoginButtons'
import {withRouter} from 'react-router-dom'


const LoginScreen = () => {
    return (
        <div>
            <Logo />
            <LoginButtons />
        </div>
    )
}

export default withRouter(LoginScreen)
