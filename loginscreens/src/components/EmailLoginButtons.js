import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import {BrowserRouter, Link, withRouter} from "react-router-dom";

const SignUpButtons = () => {
    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <div className='login-buttons d-grid gap-2'>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <Button variant='light'>Login</Button>
                    <h5>OR</h5>
                    <Button variant='light'>Login via Google</Button>
                    <Button variant='light'>Login via LinkedIn</Button>
                    <Button variant='light'>Login via Facebook</Button>
                    <BrowserRouter>
                        <Button variant='light'> <Link to={'/'} style={{ color: '#000', textDecoration: 'none'  }}>
                            Back </Link></Button>
                    </BrowserRouter>
                </div>
            </Col>
        </Row>

    )
}

export default withRouter(SignUpButtons)
