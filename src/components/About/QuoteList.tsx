import React, { FC } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip, IconButton, Typography, ListItem } from '@mui/material';

type TooltipPlacement =
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
interface QuoteListProps {
    quote: string;
    author: string;
    quoteResource: string;
    tooltipPlacement?: TooltipPlacement;
}

const QuoteList: FC<QuoteListProps> = ({ quote, author, quoteResource, tooltipPlacement }) => {
    return (
        <ListItem
            sx={{
                fontWeight: 400,
                fontSize: { lg: '13px', xl: '15px' },
                fontFamily: "'Poppins', sans-serif",
                color: '#748182',
                lineHeight: { lg: '20px', xl: '28px' },
                display: 'list-item',
            }}
        >
            {quote}
            <Tooltip
                arrow
                title={
                    <Typography variant="body2">
                        Source:{' '}
                        <a style={{ color: '#fff' }} href={quoteResource} target="_blank" rel="noreferrer">
                            {author}
                        </a>
                    </Typography>
                }
                placement={tooltipPlacement}
            >
                <IconButton>
                    <InfoOutlinedIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        </ListItem>
    );
};

export default QuoteList;

QuoteList.defaultProps = {
    tooltipPlacement: 'top',
};
