import { FC } from 'react';
import { Experience } from '@/model/resume';
import ProjectView from './ProjectView';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import ExperienceHeader from './ExperienceHeader';

interface ExperienceViewProps {
    experience: Experience;
}

const ExperienceView: FC<ExperienceViewProps> = ({ experience }) => {

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                <ExperienceHeader company={experience.company} location={experience.location} />
            </AccordionSummary>
            <AccordionDetails>
                {experience.projects.map((project) => <ProjectView key={project.name} project={project} />)}
            </AccordionDetails>
        </Accordion>
    );
};

export default ExperienceView;