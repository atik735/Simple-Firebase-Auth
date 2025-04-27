import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>

            <Header></Header>
            <div className='text-center'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;