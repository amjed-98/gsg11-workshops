import { Box, Divider, Stack } from '@mui/material';

export const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: '1px solid red' }}
      direction='row'
      spacing={4}
      divider={<Divider orientation='vertical' flexItem />}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'secondary.main',
          height: '100px',
          width: '100px',
          borderRadius: '10%',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}>
        Amjad Yahia Hassan
      </Box>

      <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>
        Javascript,Reactjs
      </Box>
    </Stack>
  );
};
