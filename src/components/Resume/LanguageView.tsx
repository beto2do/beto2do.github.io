import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { Divider, Typography } from '@mui/material';

interface LanguageViewProps {
    languages: string[];
}

const LanguageView: FC<LanguageViewProps> = ({ languages }) => {
    return (
        <Stack
            direction="row"
            spacing={2}
        >
            {languages.map((language, index) => (
                <Stack key={language} direction="row" spacing={2} alignItems="center">
                    <Typography variant="body1">{language}</Typography>
                    {index < languages.length - 1 && <Divider orientation="vertical" flexItem />}
                </Stack>
            ))}
        </Stack>
    );
};

export default LanguageView;