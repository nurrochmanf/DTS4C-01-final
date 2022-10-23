import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
    useEffect(() => {
        console.log("click");
    });
    return (
        <Box>
            <Navbar/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "79vh",
                }}
            >
                <Outlet/>
            </Box>
            <Footer/>
        </Box>
    );
}

export default Layout;
