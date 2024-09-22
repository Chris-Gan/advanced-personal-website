export const particlesConfig = {
    particles: {
        number: {
            value: 58,
            density: {
                enable: true,
                value_area: 3848.1889460772545,
            },
        },
        color: {
            value: ['#d350f0', '#11ca9f'],
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 3,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.24362316369040352,
                opacity_min: 0,
                sync: true,
            },
        },
        size: {
            value: 8.017060304327615,
            random: true,
            anim: {
                enable: true,
                speed: 0,
                size_min: 0.8120772123013452,
                sync: true,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 400.8530152163807,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
    fullScreen: {
        enable: false,
    },
};

export type InterestedFields = 'Actuarial Science' | 'Artificial Intelligence' | 'Web Development';

export interface FrontCardDetails {
    title: InterestedFields;
    descriptions: string[];
}

export type BackCardDetails = { organisation: string; certificates: { name: string; source: string }[] };

export interface CardDetails {
    front: FrontCardDetails;
    back: BackCardDetails[];
}
export const cardDetails: CardDetails[] = [
    {
        front: {
            title: 'Web Development',
            descriptions: [
                'I discovered my genuine interest in web development especially on the front-end part during my Machine Learning exploration.',
                'I realised that what I enjoyed the most is neither analysing the data nor increasing the model prediction accuracy, I gained the most satisfactions seeing my codes being converted into something attractive on the screen.',
            ],
        },
        back: [
            {
                organisation: 'Udemy',
                certificates: [{ name: '2021 Web Development Bootcamp', source: 'certificates/The Complete 2021 Web Development Bootcamp.pdf' }],
            },
            {
                organisation: 'MOOC',
                certificates: [
                    { name: 'Java Programming I', source: 'certificates/Java Programming I.pdf' },
                    { name: 'Java Programming II', source: 'certificates/Java Programming II.pdf' },
                ],
            },
            {
                organisation: 'AWS',
                certificates: [{ name: 'Certified Cloud Practitioner', source: 'certificates/AWS Certified Cloud Practitioner certificate.pdf' }],
            },
        ],
    },
    {
        front: {
            title: 'Artificial Intelligence',
            descriptions: [
                'Being one of the hottest topic within this few years, Artificial Intelligence/ Machine Learning has triggered my interests.',
                'Thanks for all the free resources on Coursera and the free time granted from the pandemic lockdown, I completed a few courses on Data Science & Machine Learning which give me deeper and more holistic exposures into this field.',
                'Furthermore, I am also now certified as Azure AI Engineer Associate!',
            ],
        },
        back: [
            {
                organisation: 'Microsoft Azure',
                certificates: [{ name: 'Azure AI Engineer Associate (AI-102)', source: 'certificates/Azure AI Engineer.pdf' }],
            },
            {
                organisation: 'Coursera',
                certificates: [
                    { name: 'What is Data Science?', source: 'certificates/Coursera- What is data science.pdf' },
                    { name: 'Tools for Data Science', source: 'certificates/Coursera- Tools for Data Science.pdf' },
                    { name: 'Data Science Methodology', source: 'certificates/Coursera- Data Science Methodology.pdf' },
                    { name: 'Machine Learning Foundations', source: 'certificates/Coursera- Machine Learning Foundations.pdf' },
                    { name: 'Machine Learning', source: 'certificates/Coursera- Machine Learning.pdf' },
                ],
            },
        ],
    },
    {
        front: {
            title: 'Actuarial Science',
            descriptions: [
                'I had a degree in Actuarial Science & Finance and I attempted a few professional exam held by Society of Actuaries (SOA) during my undergraduate studies.',
                'Society of Actuaries (SOA) is a global professional organization for actuaries. The society advances actuaries as leaders in measuring and managing risk to improve financial outcomes for individuals, organizations, and the public.',
            ],
        },
        back: [
            {
                organisation: 'Society of Actuaries',
                certificates: [
                    { name: 'Exam Probabilty', source: 'certificates/SOA Exam P.pdf' },
                    { name: 'Exam Financial Mathematics', source: 'certificates/SOA Exam FM.pdf' },
                    { name: 'Exam Investment & Financial Markets', source: 'certificates/SOA Exam IFM.pdf' },
                    { name: 'VEE Economincs', source: '' },
                    { name: 'VEE Applied Statistics', source: '' },
                    { name: 'VEE Corporate Finance', source: '' },
                ],
            },
        ],
    },
];

export const socialAppCarousel = [
    { name: 'Login Page', source: 'socialApp/social_app_login_page.png' },
    { name: 'Create New User', source: 'socialApp/social_app_register_new_user.png' },
    { name: 'Static Forgot Password Page', source: 'socialApp/static_forgot_password.png' },
    { name: 'Static Home Page', source: 'socialApp/static_general_page.png' },
    { name: 'Static Personal Page', source: 'socialApp/static_personal_page.png' },
];

export const newsAppCarousel = [
    { name: 'Light Mode General Page', source: 'newsApp/light_mode_general.png' },
    { name: 'Light Mode Details Page', source: 'newsApp/light_mode_details.png' },
    { name: 'Dark Mode General Page', source: 'newsApp/dark_mode_general.png' },
    { name: 'Dark Mode Details Page', source: 'newsApp/dark_mode_details.png' },
];
export const chatGPTAppCarousel = [
    { name: 'Login Page', source: 'clonedChatGPT/loginPage.jpg' },
    { name: 'Authentication Page', source: 'clonedChatGPT/googleAuthentication.jpg' },
    { name: 'Home Page', source: 'clonedChatGPT/homePage.jpg' },
    { name: 'Conversation Screen', source: 'clonedChatGPT/conversation.jpg' },
];
export const amazonAppCarousel = [
    { name: 'Home Page', source: 'clonedAmazon/homepage.png' },
    { name: 'Basket Page', source: 'clonedAmazon/shoppingBasket.png' },
    { name: 'Checkout Page', source: 'clonedAmazon/checkout.png' },
    { name: 'Orders Page', source: 'clonedAmazon/orders.png' },
];

export const emailRegistrationCarousel = [
    { name: 'Light Theme', source: 'emailInvitation/1. light theme.png' },
    { name: 'Dark Theme', source: 'emailInvitation/2. dark theme.png' },
    { name: 'Form Validation', source: 'emailInvitation/3. Form Validation.png' },
    { name: 'Successful Registration', source: 'emailInvitation/4. Successful.png' },
    { name: 'Failed Registration', source: 'emailInvitation/5. Fail Case.png' },
];
export const quizAppCarousel = [
    { name: 'Login', source: 'quizApp/Login.png' },
    { name: 'Question', source: 'quizApp/Question.png' },
    { name: 'Result', source: 'quizApp/Result.png' },
    { name: 'Correct Answer', source: 'quizApp/Correct Answer.png' },
];
export const serviceRequestAppCarousel = [
    { name: 'Login', source: 'serviceRequestApp/Login.png' },
    { name: 'SignUp', source: 'serviceRequestApp/SignUp.png' },
    { name: 'Dashboard', source: 'serviceRequestApp/Dashboard.png' },
    { name: 'Creation', source: 'serviceRequestApp/Creation.png' },
    { name: 'Edit', source: 'serviceRequestApp/Edit.png' },
];

export interface ContactFormInterface {
    from_name: string;
    sender_email: string;
    message: string;
}

export const contactFormInitialValues: ContactFormInterface = {
    from_name: '',
    sender_email: '',
    message: '',
};
