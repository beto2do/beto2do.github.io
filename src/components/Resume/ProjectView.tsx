import { FC } from 'react';
import { Project } from '@/model/resume';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


interface ProjectViewProps {
    project: Project;
}

const ProjectView: FC<ProjectViewProps> = ({project}) => {

    return (
        <>
            <Typography variant="h6" gutterBottom>{project.name}</Typography>
            <Typography variant="body2" gutterBottom>{project.title}</Typography>
            <List>
                {project.responsibilities.map((responsibility) => (
                    <ListItem key={responsibility}>
                        <ListItemText>{responsibility}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default ProjectView;