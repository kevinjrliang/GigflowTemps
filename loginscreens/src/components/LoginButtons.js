import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const LoginButtons = () => {
    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}> 
                <div className='login-buttons d-grid gap-2'>
                    <Button size='small' variant='light'>Login</Button>
                    <h5>OR</h5>
                    <Button variant='light'>Sign Up via Email</Button>
                    <Button variant='light'>Sign Up via Google</Button>
                    <Button variant='light'>Sign Up via LinkedIn</Button>
                    <Button variant='light'>Sign Up via Facebook</Button>
                </div>
            </Col>
        </Row>
        
    )
}

export default LoginButtons
