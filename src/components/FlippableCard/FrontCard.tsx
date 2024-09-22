import React, { FC } from 'react';
import { Box, Typography, Button, SxProps } from '@mui/material';
import { InterestedFields } from '../../utils/utils';

interface FrontCardProps {
    title: InterestedFields;
    description: string[];
    updateCardFlipped: (input: InterestedFields) => void;
    style?: SxProps;
}
const FrontCard: FC<FrontCardProps> = ({ title, description, updateCardFlipped, style }) => {
    const handleButtonClick = () => {
        console.log('clic');
        updateCardFlipped(title);
    };
    return (
        <Box display="flex" flexDirection="column" sx={{ flex: 1, borderRadius: '8px', px: 2, py: 3, ...style }}>
            <Box display="flex" flexDirection="column" sx={{ minHeight: { lg: '60vh', xl: '35vh' } }}>
                <Typography
                    sx={{ fontSize: '23px', fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', lineHeight: '30px', mb: 1 }}
                    gutterBottom
                >
                    {title}
                </Typography>
                {description.map((line) => (
                    <Typography
                        key={line}
                        sx={{ fontSize: '15px', fontFamily: "'Poppins', sans-serif", color: '#748182', lineHeight: '28px', mb: 2 }}
                        gutterBottom
                    >
                        {line}
                    </Typography>
                ))}
            </Box>
            <Box display="flex" justifyContent="flex-end" sx={{ width: '100%' }}>
                <Button variant="text" sx={{ color: 'text.primary', fontWeight: 550 }} onClick={handleButtonClick}>
                    Read More
                </Button>
            </Box>
        </Box>
    );
};

export default FrontCard;

FrontCard.defaultProps = {
    style: undefined,
};
