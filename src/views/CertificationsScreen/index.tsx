import React, { useState, useMemo } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FlippableCard from '../../components/FlippableCard/FlippableCard';
import { cardDetails, InterestedFields } from '../../utils/utils';

const Certification = () => {
    const [cardStates, setCardStates] = useState<Record<InterestedFields, boolean>>({
        'Actuarial Science': false,
        'Artificial Intelligence': false,
        'Web Development': false,
    });

    const areAllCardsFlipped = useMemo(() => Object.values(cardStates).every((item) => item), [cardStates]);
    const areAllCardsUnflipped = useMemo(() => Object.values(cardStates).every((item) => !item), [cardStates]);
    const showAllCertificates = () => {
        setCardStates({
            'Actuarial Science': true,
            'Artificial Intelligence': true,
            'Web Development': true,
        });
    };
    const hideAllCertificates = () => {
        setCardStates({
            'Actuarial Science': false,
            'Artificial Intelligence': false,
            'Web Development': false,
        });
    };

    const handleIndividualCardClicked = (input: InterestedFields) => {
        setCardStates((prev) => {
            return { ...prev, [input]: !prev[input] };
        });
    };

    return (
        <Box sx={{ mb: 5 }}>
            <Box display="flex" flexDirection="column" sx={{ mx: '10vw', mt: '3vh', mb: 2 }}>
                <Box display="flex" justifyContent="space-between">
                    <Typography
                        sx={{ fontSize: '23px', fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', lineHeight: '30px', mb: 1 }}
                        gutterBottom
                    >
                        Certifications
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Tooltip title={areAllCardsFlipped ? 'Show Basic Information' : 'Show All Certificates'} arrow placement="bottom">
                            {areAllCardsFlipped ? (
                                <IconButton onClick={hideAllCertificates} disabled={areAllCardsUnflipped}>
                                    <VisibilityOffIcon />
                                </IconButton>
                            ) : (
                                <IconButton onClick={showAllCertificates} disabled={areAllCardsFlipped}>
                                    <RemoveRedEyeIcon />
                                </IconButton>
                            )}
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="flex-between" sx={{ mx: '9vw', flexDirection: { xs: 'column', md: 'row' } }}>
                {cardDetails.map((card, index) => {
                    const { front, back } = card;
                    const { title, descriptions } = front;
                    return (
                        <FlippableCard
                            key={title}
                            isCardFlipped={cardStates[title]}
                            handleIsCardFlipped={handleIndividualCardClicked}
                            frontCardTitle={title}
                            frontCardDescription={descriptions}
                            backCardDetails={back}
                            frontCardStyle={{
                                background: index % 2 === 0 ? '#f5f5f5' : '#fff',
                                border: index % 2 === 0 ? 'none' : 'solid black 1px',
                            }}
                            backCardStyle={{ background: index % 2 === 0 ? '#fff' : '#f5f5f5', border: index % 2 === 0 ? 'solid black 1px' : 'none' }}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default Certification;
