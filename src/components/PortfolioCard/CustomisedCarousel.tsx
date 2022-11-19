import React, { FC } from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

interface CustomisedCarouselProps {
    inputArray: { name: string; source: string }[];
}
const CustomisedCarousel: FC<CustomisedCarouselProps> = ({ inputArray }) => {
    return (
        <Carousel stopAutoPlayOnHover indicators>
            {inputArray.map(({ name, source }) => (
                <Box display="flex" flexDirection="column" key={name}>
                    <Box sx={{ height: '100%', objectFit: 'contain' }} component="img" src={source} />
                </Box>
            ))}
        </Carousel>
    );
};

export default CustomisedCarousel;
