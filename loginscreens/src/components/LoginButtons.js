import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import {Link, BrowserRouter, withRouter} from "react-router-dom"

const LoginButtons = () => {
    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}> 
                <div className='login-buttons d-grid gap-2'>
                    <BrowserRouter>
                        <Button variant='light'> <Link to={'/EmailLogin'} style={{ color: '#000', textDecoration: 'none'
                        }}>Login</Link></Button>
                    </BrowserRouter>
                    <h5>OR</h5>
                    <BrowserRouter>
                        <Button variant='light'> <Link to={'/SignUpScreen'} style={{ color: '#000',
                            textDecoration: 'none'  }}>Sign Up via Email</Link></Button>
                    </BrowserRouter>

                    <Button variant='light'>Sign Up via Google</Button>
                    <Button variant='light'>Sign Up via LinkedIn</Button>
                    <Button variant='light'>Sign Up via Facebook</Button>
                </div>
            </Col>
        </Row>
        
    )
}

export default withRouter(LoginButtons)
