import { FC } from 'react';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const SocialNetwork: FC = () => {
    return (
        <>
            <IconButton
                color="inherit"
                target="_blank"
                href="https://github.com/beto2do"
                aria-label="GitHub"
                sx={{ alignSelf: 'center' }}
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                color="inherit"
                target="_blank"
                href="https://www.linkedin.com/in/humberto-s-87b71489/"
                aria-label="LinkedIn"
                sx={{ alignSelf: 'center' }}
            >
                <LinkedInIcon />
            </IconButton>
        </>
    );
};

export default SocialNetwork;