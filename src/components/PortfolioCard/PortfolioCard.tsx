import React, { FC, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, CardHeader, IconButton, Modal, Paper, ClickAwayListener, Box, Button } from '@mui/material';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import CloseIcon from '@mui/icons-material/Close';
import CustomisedCarousel from './CustomisedCarousel';

interface PortfolioCardProps {
    title: string;
    description: string;
    redirectedUrl: string;
    carouselInputArray: { name: string; source: string }[];
}
const PortfolioCard: FC<PortfolioCardProps> = ({ title, description, redirectedUrl, carouselInputArray }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>
            <Card sx={{ maxWidth: 450, mr: { md: '50px' }, mb: { xs: '20px', md: 'inherit' } }}>
                <CardHeader
                    title={title}
                    sx={{
                        '& .MuiCardHeader-title': { fontSize: '20px', fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', lineHeight: '30px' },
                        mb: 1,
                    }}
                    action={
                        <IconButton aria-label="settings" onClick={() => setIsModalOpen((prev) => !prev)}>
                            {isModalOpen ? <ZoomInMapIcon /> : <ZoomOutMapIcon />}
                        </IconButton>
                    }
                />
                <CardMedia component="div">
                    <CustomisedCarousel inputArray={carouselInputArray} />
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" sx={{ pt: { xs: 0, md: 'initial' } }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', pr: 2 }}>
                    <Button>
                        <a
                            style={{ fontSize: '16px', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', cursor: 'pointer' }}
                            href={redirectedUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Website
                        </a>
                    </Button>
                </CardActions>
            </Card>
            <Modal open={isModalOpen}>
                <Box>
                    <ClickAwayListener onClickAway={() => setIsModalOpen(false)}>
                        <Paper sx={{ width: '90vw', position: 'absolute', right: '5%', mt: { xs: '20vh', md: 0 } }}>
                            <Box display="flex" flexDirection="column">
                                <Box display="flex" justifyContent="space-between" sx={{ px: 3, py: 0 }}>
                                    <Typography
                                        sx={{ fontSize: '20px', fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', lineHeight: '30px' }}
                                    >
                                        {title}
                                    </Typography>
                                    <IconButton onClick={() => setIsModalOpen(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <CustomisedCarousel inputArray={carouselInputArray} />
                                </Box>
                            </Box>
                        </Paper>
                    </ClickAwayListener>
                </Box>
            </Modal>
        </>
    );
};

export default PortfolioCard;
