import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  console.log(checked);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label='dark mode'
        control={<Switch size='small' color='success' />}
        onChange={handleChange}
      />
    </Box>
  );
};
