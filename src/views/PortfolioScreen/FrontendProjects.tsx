import { Box } from '@mui/material';
import { FC } from 'react';
import { amazonAppCarousel, chatGPTAppCarousel, emailRegistrationCarousel, newsAppCarousel, socialAppCarousel } from '../../utils/utils';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

interface Props {
    currentTab: number;
    index: number;
}
const FrontendProjects: FC<Props> = ({ currentTab, index }) => {
    return currentTab === index ? (
        <Box display="flex" sx={{ pt: 2, flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap' }}>
            <PortfolioCard
                title="Email Registration"
                description="An email registration system created with language switches, theme toggling, form validations & mobile responsiveness"
                redirectedUrl="https://invitation-coding-challenge.vercel.app/"
                carouselInputArray={emailRegistrationCarousel}
            />
            <PortfolioCard
                title="Cloned Amazon"
                description="Cloning Amazon with limited functionalities using NextJS 13, Tailwind CSS, Firebase, Google Authentication, Stripe & Webhook "
                redirectedUrl="https://cloned-amazon-chris-gan.vercel.app/"
                carouselInputArray={amazonAppCarousel}
            />
            <PortfolioCard
                title="Cloned ChatGPT"
                description="Cloning ChatGPT using NextJS 13, Tailwind CSS, Firebase & Google Authentication "
                redirectedUrl="https://chatgpt-clone-drk7x0tjb-chris-gan.vercel.app/"
                carouselInputArray={chatGPTAppCarousel}
            />
            <PortfolioCard
                title="News Website"
                description="This is a NextJS 13 web application created mainly on the application of server side rendering, Tailwind CSS and dark & light mode toggle "
                redirectedUrl="https://chris-news-app-chris-gan.vercel.app/"
                carouselInputArray={newsAppCarousel}
            />
            <PortfolioCard
                title="Duplicated Social Website"
                description="This is just a static website trying to duplicate Facebook focus mainly on the application of Formik and Yup validation on the login page "
                redirectedUrl="https://chris-social.netlify.app/login"
                carouselInputArray={socialAppCarousel}
            />
        </Box>
    ) : null;
};

export default FrontendProjects;
