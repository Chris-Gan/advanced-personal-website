import { Box, Typography } from '@mui/material';
import React, { FC, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import Typed from 'react-typed';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { particlesConfig } from '../../utils/utils';
import AnimatedArrowButton from '../AnimatedArrowButton/AnimatedArrowButton';

const AnimatedBackground: FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Particles
                style={{ minHeight: '100vh', maxHeight: '100vh', maxWidth: '98vw', position: 'absolute', margin: 0 }}
                init={particlesInit}
                options={particlesConfig as ISourceOptions}
            />
            <Box display="flex" sx={{ minHeight: '100vh', justifyContent: 'flex-start', alignItems: 'center', pt: '20vh' }} flexDirection="column">
                <Box
                    component="img"
                    src="image.png"
                    sx={{ borderRadius: '50%', width: { xs: '120px', lg: '180px' }, border: '#E1F5FE 5px solid', objectFit: 'cover' }}
                    alt="personal-animated"
                />
                <Typography sx={{ fontWeight: '800', mt: 3.5, mb: 2.5, fontSize: { xs: '20px', lg: '30px' } }}>
                    {`I'm`} <Typed strings={[' Chris Gan.', ' a Software Engineer.']} typeSpeed={40} backSpeed={50} loop />
                </Typography>
                <Box display="flex" justifyContent="space-between" sx={{ minWidth: { xs: '20%', lg: '8%' }, zIndex: 3 }}>
                    <a href="https://github.com/Chris-Gan?tab=repositories" target="_blank" rel="noreferrer" style={{ color: 'black' }}>
                        <GitHubIcon sx={{ fontSize: { xs: '16px', lg: '1.5rem' } }} />
                    </a>
                    <a href="https://www.linkedin.com/in/chris-gan-a50902160/" target="_blank" rel="noreferrer" style={{ color: 'black' }}>
                        <LinkedInIcon sx={{ fontSize: { xs: '16px', lg: '1.5rem' } }} />
                    </a>
                    <a href="mailto:ganboontoh@gmail.com" style={{ color: 'black' }}>
                        <EmailIcon sx={{ fontSize: { xs: '16px', lg: '1.5rem' } }} />
                    </a>
                </Box>
                <AnimatedArrowButton />
            </Box>
        </>
    );
};

export default AnimatedBackground;
