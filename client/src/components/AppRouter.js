import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)
    const routes = user.isAuth ? authRoutes : publicRoutes

    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;