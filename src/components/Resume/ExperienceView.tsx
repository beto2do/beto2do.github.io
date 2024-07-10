import { FC } from 'react';
import { Experience } from '@/model/resume';
import { Typography } from '@mui/material';
import ProjectView from './ProjectView';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';

interface ExperienceViewProps {
    experience: Experience;
}

const ExperienceView: FC<ExperienceViewProps> = ({ experience }) => {

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                <Typography variant="h6" gutterBottom>{experience.company}, {experience.location}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {experience.projects.map((project) => <ProjectView key={project.name} project={project} />)}
            </AccordionDetails>
        </Accordion>
    );
};

export default ExperienceView;