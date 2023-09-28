import React from 'react';
import { Box, Typography, List, useMediaQuery } from '@mui/material';
import QuoteList from './QuoteList';

const About = () => {
    const isBigScreen = useMediaQuery('(min-width: 1200px)');

    return (
        <Box
            display="flex"
            sx={{ pt: { xs: 0, md: '15vh' }, pb: '5vh', flexDirection: { xs: 'column', md: 'row' }, maxWidth: '100vw' }}
            justifyContent="center"
            alignItems="center"
        >
            {isBigScreen ? (
                <Box sx={{ paddingBottom: { xs: '2vh', lg: '5vh' }, background: '#d4d4d4' }}>
                    <Box
                        component="img"
                        src="/website_image-removebg-preview.png"
                        sx={{
                            boxShadow: ' 0px 0px 85px 10px rgb(0 0 0 / 14%)',
                            marginTop: '-13%',
                            marginLeft: 'calc(13% - 15px)',
                            background: '#dedede',
                        }}
                    />
                </Box>
            ) : (
                <Box
                    component="img"
                    src="/website_image-removebg-preview.png"
                    sx={{
                        background: '#dedede',
                        maxWidth: { xs: '100vw' },
                    }}
                />
            )}
            <Box
                display="flex"
                flexDirection="column"
                sx={{ ml: { xs: 0, md: '10vw' }, marginTop: { xs: '2vh', lg: '-6%' }, width: { xs: '90%', lg: '35%' } }}
            >
                <Typography
                    sx={{ fontSize: '23px', fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', lineHeight: '30px', mb: 3 }}
                    gutterBottom
                >
                    ABOUT ME
                </Typography>
                <Typography sx={{ fontSize: { lg: '13px', xl: '15px' }, fontFamily: "'Poppins', sans-serif", color: '#748182', lineHeight: '28px' }}>
                    I am a <b>self-taught</b> front-end web developer based in Melbourne, Australia, currently working remotely for an Insurtech
                    company. I am a <b>active yet silent doer</b> who believe in:
                </Typography>
                <List sx={{ listStyleType: 'circle', pl: { xs: 2.5, md: 4 } }}>
                    <QuoteList
                        quote="Work hard in silence, let success make the noise."
                        author="Frank Ocean"
                        quoteResource="https://www.quotespedia.org/authors/f/frank-ocean/work-hard-in-silence-let-success-make-the-noise-frank-ocean/"
                    />
                    <QuoteList
                        quote="The way get started is to quit talking and begin doing."
                        author="Walt Disney"
                        quoteResource="https://www.scottmiker.com/the-way-to-get-started-is-to-quit-talking-and-begin-doing"
                    />
                </List>
                <Typography sx={{ fontSize: { lg: '13px', xl: '15px' }, fontFamily: "'Poppins', sans-serif", color: '#748182', lineHeight: '28px' }}>
                    Besides, I <b>enjoy challenges</b> and am always trying to leave my comfort zone to seek further improvements. I enjoy the
                    tremendous satisfaction gained from my improvements especially when I am looking back.
                </Typography>
            </Box>
        </Box>
    );
};

export default About;
