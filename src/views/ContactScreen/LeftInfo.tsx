import { Typography, Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';

const LeftInfo = () => {
    return (
        <Box display="flex" flexDirection="column" sx={{ pb: 4, px: { xs: 2, md: 0 } }}>
            <Typography variant="h5" sx={{ fontFamily: "'Poopins', sans-serif", color: 'inherit', fontWeight: 600, pt: 2 }}>
                GET IN TOUCH
            </Typography>
            <Box display="flex" flexDirection="column" sx={{ mb: { xs: 1, md: 5 } }}>
                <Typography variant="h5" sx={{ fontFamily: "'Poopins', sans-serif", color: '#414141', fontSize: '14.5px', pt: 5 }}>
                    662 Blackburn Road, Notting Hill 3168 <br />
                    Victoria, Australia
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: "'Poopins', sans-serif", color: '#414141', fontSize: '14.5px', pt: 5 }}>
                    ganboontoh@gmail.com <br />
                    +(61) 4 666 94 133
                </Typography>
            </Box>
            <Button sx={{ maxWidth: { xs: '80vw', md: '100vw' } }} endIcon={<DownloadIcon />} variant="outlined">
                <a href="Chris's 12 March 2023.pdf" style={{ color: 'inherit', textDecoration: 'none' }} download>
                    Download Resume
                </a>
            </Button>
        </Box>
    );
};

export default LeftInfo;
