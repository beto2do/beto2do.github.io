import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

interface LanguageViewProps {
    languages: string[];
}

const LanguageView: FC<LanguageViewProps> = ({ languages }) => {
    return (
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
        >
            {languages.map((language) => (
                <Typography key={language} variant="body1">{language}</Typography>
            ))}
        </Stack>
    );
};

export default LanguageView;