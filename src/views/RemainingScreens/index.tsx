import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Certification from '../CertificationsScreen';
import Portfolio from '../PortfolioScreen';
import ContactScreen from '../ContactScreen';
import Footer from '../../components/Footer';

const RemainingScreens = () => {
    const aboutSectionRef = useRef<HTMLDivElement | null>(null);
    const certificationsSectionRef = useRef<HTMLDivElement | null>(null);
    const portfolioSectionRef = useRef<HTMLDivElement | null>(null);
    const contactSectionRef = useRef<HTMLDivElement | null>(null);
    const { hash } = useLocation();

    const scrollToSection = () => {
        switch (hash) {
            case '#about':
                if (aboutSectionRef?.current?.offsetTop) {
                    window.scrollTo(0, aboutSectionRef.current.offsetTop - window.innerHeight * 0.07);
                }
                break;
            case '#certifications':
                if (certificationsSectionRef?.current?.offsetTop) {
                    window.scrollTo(0, certificationsSectionRef.current.offsetTop - window.innerHeight * 0.07);
                }
                break;
            case '#portfolio':
                if (portfolioSectionRef?.current?.offsetTop) {
                    window.scrollTo(0, portfolioSectionRef.current.offsetTop - window.innerHeight * 0.07);
                }
                break;
            case '#contact':
                if (contactSectionRef?.current?.offsetTop) {
                    window.scrollTo(0, contactSectionRef.current.offsetTop - window.innerHeight * 0.07);
                }
                break;
            default:
                window.scrollTo(0, 0);
                break;
        }
    };

    useEffect(() => {
        scrollToSection();
    }, []);
    return (
        <>
            <Navbar />
            <section id="about" ref={aboutSectionRef} style={{ scrollMarginTop: '7vh', height: '100vh', background: '#f5f5f5' }}>
                <About />
            </section>
            <section id="certifications" ref={certificationsSectionRef} style={{ scrollMarginTop: '7vh', background: '#ffff' }}>
                <Certification />
            </section>
            <section id="portfolio" ref={portfolioSectionRef} style={{ scrollMarginTop: '7vh', background: '#f5f5f5' }}>
                <Portfolio />
            </section>
            <section id="contact" ref={contactSectionRef} style={{ scrollMarginTop: '7vh', background: '#ffff' }}>
                <ContactScreen />
            </section>
            <section style={{ scrollMarginTop: '7vh', background: '#333', minHeight: '20vh' }}>
                <Footer />
            </section>
        </>
    );
};

export default RemainingScreens;
