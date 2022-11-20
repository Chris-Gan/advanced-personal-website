import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ background: '#333', height: { xs: '23vh', md: '20vh' } }}
            alignItems="center"
        >
            <Box display="flex" justifyContent="space-between" sx={{ minWidth: { xs: '20vw', md: '5vw' }, pb: { xs: 1, md: 0 } }}>
                <a href="https://github.com/Chris-Gan?tab=repositories" target="_blank" rel="noreferrer" style={{ color: 'black' }}>
                    <GitHubIcon sx={{ color: '#fff', fontSize: '16px' }} />
                </a>
                <a href="https://www.linkedin.com/in/chris-gan-a50902160/" target="_blank" rel="noreferrer" style={{ color: 'black' }}>
                    <LinkedInIcon sx={{ color: '#fff', fontSize: '16px' }} />
                </a>
                <a href="mailto:ganboontoh@gmail.com" style={{ color: 'black' }}>
                    <EmailIcon sx={{ color: '#fff', fontSize: '16px' }} />
                </a>
            </Box>
            <Typography sx={{ color: '#748182', fontSize: '15px' }}>Copyright © 2022 Chris Gan, All rights Reserved.</Typography>
            <Typography sx={{ color: '#748182', fontSize: '15px' }}>Created by Chris Gan</Typography>
        </Box>
    );
};

export default Footer;
