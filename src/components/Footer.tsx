import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SocialNetwork from '@/components/common/SocialNetwork';
import Stack from '@mui/material/Stack';
import Copyright from '@/components/common/Copyright';

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 2, sm: 4 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 2, sm: 2 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
            <SocialNetwork />
        </Stack>
      </Box>
    </Container>
  );
}
