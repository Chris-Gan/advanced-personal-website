import React, { FC } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface MobileNavbarListItemProps {
    label: string;
    sectionId: string;
}
const MobileNavbarListItem: FC<MobileNavbarListItemProps> = ({ label, sectionId }) => {
    return (
        <List>
            <ListItem>
                <ListItemButton>
                    <a href={sectionId}>
                        <ListItemText primary={label} />
                    </a>
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default MobileNavbarListItem;
