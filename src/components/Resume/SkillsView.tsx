import { FC } from 'react';
import { Skill } from '@/model/resume';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface SkillsViewProps { 
    skills: Skill[];
    color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const SkillsView: FC<SkillsViewProps> = ({ skills, color}) => {
    return (
            <Stack direction="row" flexWrap="wrap" gap={1}>
                {skills.map((skill) => (
                    <Chip key={skill.name} label={skill.name} color={color} />
                ))}
            </Stack>
    );
};

export default SkillsView;