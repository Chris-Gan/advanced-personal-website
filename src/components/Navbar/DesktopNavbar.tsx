import { Box, AppBar, Toolbar, Typography, Slide } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import NavbarItem from './DesktopNavbarItem';

const DesktopNavbar = () => {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState<boolean>(false);
    const containerRef = useRef<Element | null>(null);

    const handleScroll = () => {
        setIsNavbarExpanded(window.scrollY > window.innerHeight - 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window]);

    return (
        <Box
            sx={{ display: 'flex', maxWidth: '100vw', height: '7vh', alignItems: 'center', position: 'sticky', top: 0, zIndex: '99' }}
            ref={containerRef}
        >
            <Slide direction="down" in={isNavbarExpanded} onScroll={handleScroll} mountOnEnter unmountOnExit container={containerRef.current}>
                <AppBar component="nav" sx={{ background: '#fff', boxShadow: '-5px 10px 12px -10px rgb(201 201 201 / 67%);' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black' }}>
                            Chris
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <NavbarItem label="Home" sectionId="#home" />
                            <NavbarItem label="About" sectionId="#about" />
                            <NavbarItem label="Certifications" sectionId="#certifications" />
                            <NavbarItem label="Portfolio" sectionId="#portfolio" />
                            <NavbarItem label="Contact" sectionId="#contact" />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Slide>
        </Box>
    );
};

export default DesktopNavbar;
