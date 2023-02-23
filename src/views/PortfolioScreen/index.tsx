import React from 'react';
import { Box, Typography } from '@mui/material';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { chatGPTAppCarousel, newsAppCarousel, socialAppCarousel } from '../../utils/utils';

const Portfolio = () => {
    return (
        <Box display="flex" flexDirection="column" sx={{ maxWidth: '80vw', mx: 'auto', pb: 4 }}>
            <Typography variant="h5" sx={{ fontFamily: "'Poopins', sans-serif", color: 'inherit', fontWeight: 600, pt: 2 }}>
                PORTFOLIO
            </Typography>
            <Box display="flex" sx={{ pt: 2, flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap' }}>
                <PortfolioCard
                    title="Duplicated Social Website"
                    description="This is just a static website trying to duplicate Facebook focus mainly on the application of Formik and Yup validation on the login page "
                    redirectedUrl="https://chris-social.netlify.app/login"
                    carouselInputArray={socialAppCarousel}
                />
                <PortfolioCard
                    title="News Website"
                    description="This is a NextJS 13 web application created mainly on the application of server side rendering, Tailwind CSS and dark & light mode toggle "
                    redirectedUrl="https://chris-news-app-chris-gan.vercel.app/"
                    carouselInputArray={newsAppCarousel}
                />
                <PortfolioCard
                    title="Cloned ChatGPT"
                    description="Cloning ChatGPT using NextJS 13, Tailwind CSS, Firebase & Google Authentication "
                    redirectedUrl="https://chatgpt-clone-drk7x0tjb-chris-gan.vercel.app/"
                    carouselInputArray={chatGPTAppCarousel}
                />
            </Box>
        </Box>
    );
};

export default Portfolio;
