import React from 'react';
import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import Intro from './views/HomeScreen/Home';

const Routes = () => {
    return (
        <RoutesWrapper>
            <Route index element={<Intro />} />
            {/* <Route path="/#about" element={<div id="about">about myself</div>} /> */}
        </RoutesWrapper>
    );
};

export default Routes;
