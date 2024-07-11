import { FC } from 'react';
import { Project } from '@/model/resume';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemIcon from '@mui/material/ListItemIcon';
import { grey } from '@mui/material/colors';

interface ProjectViewProps {
    project: Project;
}

const ProjectView: FC<ProjectViewProps> = ({project}) => {

    return (
        <>
            <Typography variant="body1" gutterBottom>{project.name}</Typography>
            <Typography variant="body2" gutterBottom>{project.title}</Typography>
            <Grid container spacing={2}>
                <Grid xs={12} md={2}>
                    <Typography variant="caption" color={ grey[400]} gutterBottom>{project.startDate} - {project.endDate}</Typography>
                </Grid>
                <Grid xs={12} md={10}>  
                    <Typography variant="caption" color={ grey[400]} gutterBottom>Responsibilities:</Typography>
                    <List dense>
                        {project.responsibilities.map((responsibility) => (
                            <ListItem key={responsibility} dense>
                                <ListItemIcon>
                                    <CircleIcon fontSize='small' color='primary'/>
                                </ListItemIcon>
                                <ListItemText>{responsibility}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    );
};

export default ProjectView;