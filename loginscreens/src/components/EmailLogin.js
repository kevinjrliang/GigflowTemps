import React from 'react'
import Logo from './Logo'
import {withRouter} from "react-router-dom";
import EmailLoginButtons from "./EmailLoginButtons";

function EmailLogin() {
    return (
        <div className="EmailLogin">
            <Logo />
            <EmailLoginButtons />
        </div>
    );
}

export default withRouter(EmailLogin);
