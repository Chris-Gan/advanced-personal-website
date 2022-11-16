import React, { FC } from 'react';
import { Box, SxProps } from '@mui/material';
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';
import { BackCardDetails, InterestedFields } from '../../utils/utils';

interface FlippableCardProps {
    isCardFlipped: boolean;
    handleIsCardFlipped: (input: InterestedFields) => void;
    frontCardTitle: InterestedFields;
    frontCardDescription: string[];
    backCardDetails: BackCardDetails[];
    cardContainerStyle?: SxProps;
    frontCardStyle?: SxProps;
    backCardStyle?: SxProps;
}
const FlippableCard: FC<FlippableCardProps> = ({
    isCardFlipped,
    handleIsCardFlipped,
    frontCardTitle,
    frontCardDescription,
    backCardDetails,
    cardContainerStyle,
    frontCardStyle,
    backCardStyle,
}) => {
    return (
        <Box display="flex" sx={{ flex: 1, ...cardContainerStyle, mx: 1 }}>
            <ReactCardFlip
                isFlipped={isCardFlipped}
                flipDirection="horizontal"
                cardStyles={{ front: { minWidth: '25vw' }, back: { minWidth: '25vw' } }}
            >
                <FrontCard title={frontCardTitle} description={frontCardDescription} updateCardFlipped={handleIsCardFlipped} style={frontCardStyle} />
                <BackCard
                    frontCardTitle={frontCardTitle}
                    backCardDetails={backCardDetails}
                    updateCardFlipped={handleIsCardFlipped}
                    style={backCardStyle}
                />
            </ReactCardFlip>
        </Box>
    );
};

export default FlippableCard;

FlippableCard.defaultProps = {
    cardContainerStyle: undefined,
    frontCardStyle: undefined,
    backCardStyle: undefined,
};
