import { FC } from 'react';
import { Experience } from '@/model/resume';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ExperienceView from './ExperienceView';

interface WorkExperienceViewProps {
    experiences: Experience[];
}

const WorkExperienceView: FC<WorkExperienceViewProps> = ({experiences}) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={2}>
                    <Typography variant="h5" gutterBottom color="primary">Work Experience</Typography>
                </Grid>
                <Grid xs={12} md={10}>
                    {experiences.map((experience) => <ExperienceView key={experience.company} experience={experience} />)}
                </Grid>
            </Grid>
        </Box>
    );
};

export default WorkExperienceView;