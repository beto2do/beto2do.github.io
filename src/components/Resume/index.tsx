import { FC } from 'react';
import { Resume, SkillLevel } from '@/model/resume';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import SkillsView from './SkillsView';
import LanguageView from './LanguageView';
import WorkExperienceView from './WorkExperienceView';

interface ResumeProps {
    resume: Resume;
}

const ResumeView: FC<ResumeProps> = ({ resume }) => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column',}}>
            <Typography variant="h4" gutterBottom>Resume</Typography>
            <Typography variant="h6" gutterBottom>Qualifications</Typography>
            <Typography variant="body1" gutterBottom>Proficient in:</Typography>
            <SkillsView skills={resume.skills.filter(skill => skill.level === SkillLevel.EXPERT)} color='primary' />
            <Typography variant="body1" gutterBottom>Exposure:</Typography>
            <SkillsView skills={resume.skills.filter(skill => skill.level === SkillLevel.FAMILIAR)} color='info' />
            <Typography variant="h6" gutterBottom>Languages</Typography>
            <LanguageView languages={resume.languages} />
            <WorkExperienceView experiences={resume.experience} />
        </Container>
    );
};

export default ResumeView;