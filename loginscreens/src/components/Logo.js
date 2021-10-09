import React from 'react'
import icon from '../icon.png'

const Logo = () => {
    return (
        <div>
            <h1 className='logo'>Gigflow Labs Inc.</h1>
            <img src={icon} className='icon' alt='logo'/>
        </div>
    )
}

export default Logo
