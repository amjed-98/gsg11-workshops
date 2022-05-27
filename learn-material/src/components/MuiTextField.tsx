import { Visibility } from '@mui/icons-material';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';

export const MuiTextField = () => {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField
          label='small secondary'
          size='small'
          color='secondary'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'do not share your password'}
          // disabled
          // InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField
          label='amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='weight'
          InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }}
        />

        <TextField
          label='password'
          type='password'
          error
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Visibility />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
