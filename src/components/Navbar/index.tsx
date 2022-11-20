import { useMediaQuery } from '@mui/material';
import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const isBigScreen = useMediaQuery('(min-width: 1200px)');
    return isBigScreen ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
