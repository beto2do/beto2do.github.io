import { FC } from 'react';
import { Resume, SkillLevel } from '@/model/resume';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import SkillsView from './SkillsView';
import LanguageView from './LanguageView';
import WorkExperienceView from './WorkExperienceView';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';

interface ResumeProps {
    resume: Resume;
}

const ResumeView: FC<ResumeProps> = ({ resume }) => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', pt: 2}}>
            <Stack spacing={2}>
                <Typography variant="h3" sx={{fontWeight: 700}}>Resume</Typography>
                <Typography variant="h5" color="primary">Qualifications</Typography>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <SkillsView skills={resume.skills.filter(skill => skill.level === SkillLevel.EXPERT)} color='primary' header='Proficient in' />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <SkillsView skills={resume.skills.filter(skill => skill.level === SkillLevel.FAMILIAR)} color='info' header='Exposure'/>
                    </Grid>
                </Grid>
                <Typography variant="h5" color="primary">Languages</Typography>
                <LanguageView languages={resume.languages} />
                <WorkExperienceView experiences={resume.experience} />
            </Stack>
        </Container>
    );
};

export default ResumeView;