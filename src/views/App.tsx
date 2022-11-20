import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Home from './HomeScreen/Home';
import RemainingScreens from './RemainingScreens';
import Navbar from '../components/Navbar';
// import Routes from '../Routes';

const App = () => {
    return (
        <ErrorBoundary>
            <Router basename="/">
                {/* <Routes /> */}
                <Home />
                <Navbar />
                <RemainingScreens />
            </Router>
        </ErrorBoundary>
    );
};

export default App;
