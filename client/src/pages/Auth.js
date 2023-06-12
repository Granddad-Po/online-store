import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        if (isLogin) {
            const response = await login()
        } else {
            const response = await registration(email, password)
            console.log(response)
        }
    }
    
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        placeholder={'Enter your password...'}
                        className={'mt-3'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={'password'}
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
                            onClick={() => click()}
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