import React from 'react';
import { Box, Typography, List } from '@mui/material';
import QuoteList from './QuoteList';

const About = () => {
    return (
        <Box display="flex" sx={{ pt: '15vh', pb: '5vh' }} justifyContent="center" alignItems="center">
            <Box sx={{ paddingBottom: { lg: '2vh', xl: '5vh' }, background: '#d4d4d4' }}>
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
            <Box display="flex" flexDirection="column" sx={{ ml: '10vw', marginTop: '-6%', width: '35%' }}>
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
                <List sx={{ listStyleType: 'circle', pl: { xl: 4 } }}>
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
                    tremendous satisfaction gained from my improvements especially when I am looking back. For instance, this is my{' '}
                    <a style={{ color: '#748182' }} href="https://hidden-dawn-57338.herokuapp.com/" target="_blank" rel="noreferrer">
                        personal website
                    </a>{' '}
                    one year ago.
                </Typography>
            </Box>
        </Box>
    );
};

export default About;
