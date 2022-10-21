import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>
                NAVBAR
            </div>
            <Outlet/>
            <div>
                FOOTER
            </div>
        </div>
    );
}

export default Layout;
