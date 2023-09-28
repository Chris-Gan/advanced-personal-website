import { Box } from '@mui/material';
import React, { FC } from 'react';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { quizAppCarousel } from '../../utils/utils';

interface Props {
    currentTab: number;
    index: number;
}
const FullstackProjects: FC<Props> = ({ currentTab, index }) => {
    return currentTab === index ? (
        <Box display="flex" sx={{ pt: 2, flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap' }}>
            <PortfolioCard
                title="Quiz App"
                description="An Azure-deployed full stack quiz application built with React, TypeScript, .NET Core Web API, Entity Framework Core, and SQL Server."
                redirectedUrl="https://chris-gan-quiz-app.vercel.app/"
                carouselInputArray={quizAppCarousel}
            />
        </Box>
    ) : null;
};

export default FullstackProjects;
