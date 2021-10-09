import React from 'react'
import Logo from './Logo'
import SignUpButtons from "./SignUpButtons";
import {withRouter} from "react-router-dom";

function SignUpScreen() {
    return (
        <div className="SignUpScreen">
            <Logo />
            <SignUpButtons />
        </div>
    );
}

export default withRouter(SignUpScreen);
