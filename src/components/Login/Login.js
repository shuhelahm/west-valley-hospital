import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../contexts/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleEmailChange , handlePasswordChange ,handleRegistrantion } = useAuth();
    return (
        <div>
            <Form className='m-4' onSubmit={handleRegistrantion}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={handleRegistrantion } type="submit">Log In</Button>
                    </Col>
                </Form.Group>
            </Form>
            <h1>or</h1>
        <Button onClick={signInUsingGoogle} type="submit">Google Sign In</Button>
        </div>
    );
};

export default Login;