import React, { useEffect, useRef, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Box, Slide, Grow, Divider } from '@mui/material';
import MobileNavbarListItem from './MobileNavbarListItem';

const MobileNavbar = () => {
    const [isNavbarAppear, setIsNavbarAppear] = useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const containerRef = useRef<Element | null>(null);

    const handleScroll = () => {
        setIsNavbarAppear(window.scrollY > 200);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window]);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100vw',
                alignItems: 'center',
                position: 'fixed',
                zIndex: '999',
                top: 0,
            }}
            ref={containerRef}
        >
            <Slide direction="down" in={isNavbarAppear} mountOnEnter onScroll={handleScroll} container={containerRef.current}>
                <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                        width: '100vw',
                        background: '#fff',
                        // top: 0,
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ height: '12vh' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '600',
                                '&.MuiTypography-h6': {
                                    ml: { xs: 3 },
                                },
                                color: 'black',
                            }}
                        >
                            Chris
                        </Typography>
                        <IconButton onClick={() => setIsDrawerOpen((prev) => !prev)} sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Grow unmountOnExit in={isDrawerOpen}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            sx={{
                                position: 'absolute',
                                zIndex: '33',
                                mt: '12vh',
                                background: '#fff',
                                width: '100vw',
                                boxShadow: '-5px 10px 12px -10px rgb(201 201 201 / 67%);',
                            }}
                        >
                            <Divider sx={{ width: '100%' }} />
                            <MobileNavbarListItem label="Home" sectionId="#" setIsDrawerOpen={setIsDrawerOpen} hasDivider />
                            <MobileNavbarListItem label="About" sectionId="#about" setIsDrawerOpen={setIsDrawerOpen} hasDivider />
                            <MobileNavbarListItem label="Certifications" sectionId="#certification" setIsDrawerOpen={setIsDrawerOpen} hasDivider />
                            <MobileNavbarListItem label="Portfolio" sectionId="#portfolio" setIsDrawerOpen={setIsDrawerOpen} hasDivider />
                            <MobileNavbarListItem label="Contact" sectionId="#contact" setIsDrawerOpen={setIsDrawerOpen} />
                        </Box>
                    </Grow>
                </Box>
            </Slide>
        </Box>
    );
};

export default MobileNavbar;
