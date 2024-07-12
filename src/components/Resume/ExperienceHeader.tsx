import { FC } from 'react';
import { Typography, Stack } from '@mui/material';

interface ExperienceHeaderProps {
    company: string;
    location: string;
}
//add period in the header
const ExperienceHeader: FC<ExperienceHeaderProps> = ({ company, location }) => {
    return (
        <Stack spacing={0}>
            <Stack direction="row" spacing={1} sx={{alignItems: 'baseline'}}>
                <Typography variant="h6" color='primary'>{company}</Typography>
                <Typography variant="caption" color='secondary'>{location}</Typography>
             </Stack>
            <Stack direction="row" spacing={1}>
                
             </Stack>
        </Stack>
    );
};

export default ExperienceHeader;