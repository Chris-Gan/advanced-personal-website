import React from 'react';
// import { useLocation } from 'react-router-dom';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';

const Home = () => {
    return (
        <section id="home" style={{ minHeight: '100vh', maxHeight: '100vh', scrollMarginTop: '1rem' }}>
            <AnimatedBackground />
        </section>
    );
};

export default Home;
