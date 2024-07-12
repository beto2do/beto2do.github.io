import { FC } from 'react';
import { Skill } from '@/model/resume';
import Stack from '@mui/material/Stack';
import { Divider, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

interface SkillsViewProps { 
    skills: Skill[];
    header: string;
    color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const SkillsView: FC<SkillsViewProps> = ({ skills, header, color}) => {
    return (
        <>
        <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
            <ListIcon/> 
            <Typography variant="subtitle1" gutterBottom>{header}</Typography>
        </Stack>
        <Divider />
        <Stack  spacing={0}>
            {
                skills.map((skill) => (
                <Typography key={skill.name} variant="caption" gutterBottom>{skill.name}</Typography>
                ))
            }
        </Stack>
        </>
    );
};

export default SkillsView;