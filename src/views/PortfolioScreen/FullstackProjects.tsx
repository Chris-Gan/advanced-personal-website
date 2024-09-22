import { Box } from '@mui/material';
import React, { FC } from 'react';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { quizAppCarousel, serviceRequestAppCarousel } from '../../utils/utils';

interface Props {
    currentTab: number;
    index: number;
}
const FullstackProjects: FC<Props> = ({ currentTab, index }) => {
    return currentTab === index ? (
        <Box display="flex" sx={{ pt: 2, flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap' }}>
            <PortfolioCard
                title="Cloud-Based Service Request Management System"
                description="A full-stack serverless request management platform using NodeJS, ReactJS & AWS Services such as Cognito, Lambda, S3, Dynamo DB & API Gateway."
                redirectedUrl="https://master.d25z4iec0g453l.amplifyapp.com/"
                carouselInputArray={serviceRequestAppCarousel}
            />
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
