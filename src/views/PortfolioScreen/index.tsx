import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import FrontendProjects from './FrontendProjects';
import FullstackProjects from './FullstackProjects';

const Portfolio = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box display="flex" flexDirection="column" sx={{ maxWidth: '80vw', mx: 'auto', pb: 4 }}>
            <Typography variant="h5" sx={{ fontFamily: "'Poopins', sans-serif", color: 'inherit', fontWeight: 600, pt: 2 }}>
                PORTFOLIO
            </Typography>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
                <Tab label="Full Stack" />
                <Tab label="Frontend" />
            </Tabs>
            <FullstackProjects currentTab={value} index={0} />
            <FrontendProjects currentTab={value} index={1} />
        </Box>
    );
};

export default Portfolio;
