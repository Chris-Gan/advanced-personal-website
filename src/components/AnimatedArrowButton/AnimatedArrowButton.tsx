import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
// import { Link } from 'react-router-dom';

const AnimatedArrowButton = () => {
    // const navigate = useNavigate();
    // const handleButtonClick = () => {
    //     navigate('#about');
    // };
    return (
        <Box sx={{ mt: 5 }}>
            <a href="#about">
                <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} type="button">
                    <motion.div
                        animate={{
                            y: [1, 4],
                        }}
                        transition={{
                            repeat: Infinity,
                        }}
                        whileHover={{
                            color: 'grey',
                            animation: undefined,
                        }}
                    >
                        <KeyboardArrowDownIcon
                            sx={{
                                '&.MuiSvgIcon-root': {
                                    width: '3rem',
                                    height: '3rem',
                                },
                            }}
                        />
                    </motion.div>
                </button>
            </a>
        </Box>
    );
};

export default AnimatedArrowButton;
