import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    
    return (
        <Container className={'d-flex justify-content-center align-items-center'}
                   style={{height: window.innerHeight - 54}}>
            <Card className={'p-4'}
                  style={{width: '600px'}}
            >
                <h2 className={'m-auto'}>{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        placeholder={'Enter your email...'}
                        className={'mt-3'}
                    />
                    <Form.Control
                        placeholder={'Enter your password...'}
                        className={'mt-3'}
                    />
                    <Row className={'d-flex justify-content-between mt-3 pl-3 pr-3'}>
                        {isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                            </div>
                            :
                            <div>
                                Already have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                        >
                            {isLogin ? "Log In" : "Register"}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;