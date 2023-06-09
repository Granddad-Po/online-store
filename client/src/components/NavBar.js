import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    
    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav
                        className="ml-auto"
                        style={{color: "white"}}
                        navbarScroll
                    >
                        <Button 
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin Panel
                        </Button>
                        <Button
                            variant={"outline-light"} className={'ml-2'}
                            onClick={() => logout()}
                        >
                            Log out
                        </Button>
                    </Nav>
                    :
                    <Nav
                        className="ml-auto"
                        style={{color: "white"}}
                        navbarScroll
                    >
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Authorization
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;