import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../contexts/useAuth';

const Register = () => {
    const {createUserWithEmailAndPassword, handleEmailChange , handlePasswordChange,handleRegistrantion} = useAuth();
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

                <Form.Group as={Row} className="mb-4">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" onClick={createUserWithEmailAndPassword}>Register</Button>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" >Already registered?</Button>
                    </Col>
                </Form.Group>
            </Form>
            <h1>or</h1>
            <Button type="submit">Google Sign In</Button>
        </div>
    );
};

export default Register;