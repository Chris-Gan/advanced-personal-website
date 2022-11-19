import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MobileNavbarListItem from './MobileNavbarListItem';

const MobileNavbar = () => {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState<boolean>(false);
    return <>
      <IconButton edge="start" color="inherit" onClick={(!prev)=>setIsNavbarExpanded(!prev)} sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton><SwipeableDrawer
      open={isNavbarExpanded}

    >
        <MobileNavbarListItem label="About" sectionId="#" />
      </SwipeableDrawer>
    </>
};

export default MobileNavbar;
