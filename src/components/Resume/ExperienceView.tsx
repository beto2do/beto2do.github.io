import { FC } from 'react';
import { Experience } from '@/model/resume';
import { Typography } from '@mui/material';
import ProjectView from './ProjectView';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import Stack from '@mui/material/Stack';
import { blue, grey } from '@mui/material/colors';

interface ExperienceViewProps {
    experience: Experience;
}

const ExperienceView: FC<ExperienceViewProps> = ({ experience }) => {

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                <Stack spacing={0}>
                    <Typography variant="h6" color={blue[200]}>{experience.company}</Typography>
                    <Typography variant="body2" color={ grey[400]}>{experience.location}</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                {experience.projects.map((project) => <ProjectView key={project.name} project={project} />)}
            </AccordionDetails>
        </Accordion>
    );
};

export default ExperienceView;