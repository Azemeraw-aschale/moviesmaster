import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import MainContent from './MainContent';

const Layout = () => {

    return (

        <div className="bg-white h-screen w-screen overflow-hidden flex flex-row">
            <div className="flex flex-col flex-1">
                <Sidebar />
                <Header />
                <MainContent />

            </div>
        </div>

    )
}

export default Layout