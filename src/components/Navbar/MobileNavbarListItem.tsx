import React, { FC, useMemo } from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface MobileNavbarListItemProps {
    label: string;
    sectionId: string;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    hasDivider?: boolean;
}
const MobileNavbarListItem: FC<MobileNavbarListItemProps> = ({ label, sectionId, setIsDrawerOpen, hasDivider }) => {
    const { hash } = useLocation();

    const selectedStyle = useMemo(() => {
        if (hash === sectionId) {
            return { color: '#afafaf' };
        }
        return { color: 'inherit' };
    }, [hash]);
    return (
        <>
            <List>
                <ListItem>
                    <ListItemButton>
                        <a onClick={() => setIsDrawerOpen(false)} style={{ ...selectedStyle, textDecoration: 'none' }} href={sectionId}>
                            <ListItemText primary={label} />
                        </a>
                    </ListItemButton>
                </ListItem>
            </List>
            {hasDivider && <Divider sx={{ width: '100%' }} />}
        </>
    );
};

export default MobileNavbarListItem;

MobileNavbarListItem.defaultProps = {
    hasDivider: false,
};
