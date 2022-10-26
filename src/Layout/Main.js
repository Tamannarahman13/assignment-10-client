import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Pages/LeftSide/LeftSide';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;