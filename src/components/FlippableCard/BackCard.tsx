import React, { FC, Fragment } from 'react';
import { Box, Typography, Button, SxProps } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { InterestedFields, BackCardDetails } from '../../utils/utils';

interface BackCardProps {
    frontCardTitle: InterestedFields;
    backCardDetails: BackCardDetails[];
    updateCardFlipped: (input: InterestedFields) => void;
    style?: SxProps;
}
const BackCard: FC<BackCardProps> = ({ frontCardTitle, backCardDetails, updateCardFlipped, style }) => {
    const handleButtonClick = () => {
        updateCardFlipped(frontCardTitle);
    };
    return (
        <Box display="flex" flexDirection="column" sx={{ flex: 1, borderRadius: '8px', px: 2, py: 3, ...style }}>
            <Box sx={{ minHeight: { lg: '50vh', xl: '33vh' } }}>
                {backCardDetails.map((certificate) => {
                    const { organisation, certificates } = certificate;

                    return (
                        <Fragment key={organisation}>
                            <Typography sx={{ fontSize: '18px', fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', pl: 2 }}>
                                {organisation}
                            </Typography>
                            <ul>
                                {certificates.map((item) => {
                                    const { name, source } = item;
                                    return (
                                        <li key={name}>
                                            <Box display="flex" alignItems="center">
                                                {source !== '' ? (
                                                    <>
                                                        <a
                                                            style={{
                                                                fontSize: '16px',
                                                                fontFamily: "'Poppins', sans-serif",
                                                                color: '#748182',
                                                                lineHeight: '28px',
                                                                textDecoration: 'none',
                                                            }}
                                                            href={source}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {name}
                                                        </a>
                                                        <OpenInNewIcon sx={{ px: 1, fontSize: '16px', color: '#748182' }} />
                                                    </>
                                                ) : (
                                                    <Typography sx={{ fontSize: '16px', fontFamily: "'Poppins', sans-serif", color: '#748182' }}>
                                                        {name}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Fragment>
                    );
                })}
            </Box>

            <Box display="flex" justifyContent="flex-end">
                <Button variant="text" sx={{ color: 'text.primary', fontWeight: 550 }} onClick={handleButtonClick}>
                    Read More
                </Button>
            </Box>
        </Box>
    );
};

export default BackCard;

BackCard.defaultProps = {
    style: undefined,
};
