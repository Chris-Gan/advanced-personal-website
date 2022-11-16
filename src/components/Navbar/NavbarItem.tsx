import React, { FC } from 'react';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface NavbarItemProps {
    label: string;
    sectionId: string;
}
const NavbarItem: FC<NavbarItemProps> = ({ label, sectionId }) => {
    const { hash } = useLocation();
    return (
        <Button sx={{ color: '#fff' }}>
            <a href={sectionId} style={{ color: hash.includes(sectionId) ? '#afafaf' : '#000', textDecoration: 'none' }}>
                {label}
            </a>
        </Button>
    );
};

export default NavbarItem;
