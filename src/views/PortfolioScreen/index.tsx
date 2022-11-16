import React from 'react';
import { Box, Typography } from '@mui/material';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { socialAppCarousel } from '../../utils/utils';

const Portfolio = () => {
    return (
        <Box display="flex" flexDirection="column" sx={{ maxWidth: '80vw', mx: 'auto', pb: 4 }}>
            <Typography variant="h5" sx={{ fontFamily: "'Poopins', sans-serif", color: 'inherit', fontWeight: 600, pt: 2 }}>
                PORTFOLIO
            </Typography>
            <Box display="flex" sx={{ pt: 2 }}>
                <PortfolioCard
                    title="Social Website"
                    description="This is just a static website trying to duplicate Facebook focus mainly on the application of Formik and Yup validation on the login page "
                    redirectedUrl="https://chris-social.netlify.app/login"
                    carouselInputArray={socialAppCarousel}
                />
            </Box>
        </Box>
    );
};

export default Portfolio;
