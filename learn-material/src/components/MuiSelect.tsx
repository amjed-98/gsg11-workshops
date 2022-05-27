import { Box, Menu, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [error, setError] = useState('');
  console.log(countries);
  const handleSelectChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    !value.length && setError('Please select a country');

    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box width='250px'>
      <TextField
        label='Select a country'
        variant='outlined'
        color='primary'
        select
        value={countries}
        fullWidth
        SelectProps={{ multiple: true }}
        size='small'
        helperText='please select your country'
        error
        onChange={handleSelectChange}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>United States</MenuItem>
        <MenuItem value='GB'>United Kingdom</MenuItem>
      </TextField>
      <MenuItem />
    </Box>
  );
};
