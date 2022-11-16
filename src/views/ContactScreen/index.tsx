import { Box } from '@mui/material';
import React from 'react';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';

const ContactScreen = () => {
    return (
        <Box display="flex" justifyContent="space-around" sx={{ mb: 4 }}>
            <LeftInfo />
            <RightInfo />
        </Box>
    );
};

export default ContactScreen;
