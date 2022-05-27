import { Card, CardContent, Typography } from '@mui/material';

export const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. It is maintained by
            Facebook and a community of individual developers and companies. React can be used
            as a base in the development of single-
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
