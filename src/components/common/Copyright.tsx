import { FC } from 'react';
import Typography from '@mui/material/Typography';

const Copyright: FC = () => {
    return (
      <Typography variant="body2" color="text.secondary" mt={1}>
          {`${'©'} ${new Date().getFullYear()} by Humberto Segundo`}
    </Typography>
    );
};

export default Copyright;