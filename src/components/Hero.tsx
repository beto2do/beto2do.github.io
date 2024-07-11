import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { ChipOwnProps } from '@mui/material/Chip';

interface ChipData { 
    key: number;
    label: string;
    color: ChipOwnProps['color'];
}
  const chipData: ChipData[] = [
    { key: 0, label: 'React', color: 'primary' },
    { key: 1, label: 'Angular', color: 'error' },
    { key: 2, label: 'Nodejs', color: 'success' },
    { key: 3, label: 'TypeScript', color: 'info' },
    { key: 4, label: 'Nextjs', color: 'warning' },
  ];

export default function Hero() {
  return (

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 5 },
          pb: { xs: 8, sm: 7 },
        }}
          >
            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <Avatar alt="Humberto Segundo" src="/beto.jpeg" sx={{width: '100%', height: 'auto'}} />
                </Grid>
                <Grid xs={12} md={8}>
                    <Stack spacing={2} useFlexGap>
                        <Typography
                            variant="h1"
                            sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            }}
                        >
                            Hello
                        </Typography>
                        <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'primary.light'
                                    }}
                        >
                        About Me
                        </Typography>
                        <Typography
                            color="text.secondary"
                            sx={{ alignSelf: 'justify' }}
                        >
                            I am an accomplished software engineer, boasting an extensive 13-year background in analyzing, designing, developing, and integrating web application solutions. Proficient in Angular, React and Node.js. I excel in implementing enhancements to user experience and code quality. My attributes include being a fast learner, highly committed, and adaptable in various scenarios.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'primary.light'
                            }}
                        >
                        Proficient
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {chipData.map((data) => {

                                return (
                                    <Chip
                                        key={data.key}
                                        color={data.color}
                                        label={data.label}
                                        size="small"
                                    />
                                );
                            })}
                        </Stack>
                    </Stack>                
                </Grid>
            </Grid>
      </Container>
  );
}
