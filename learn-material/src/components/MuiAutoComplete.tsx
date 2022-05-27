import { Autocomplete, Stack, TextField } from '@mui/material';
import { useState } from 'react';

// array of skills
const skills = [
  'JavaScript',
  'React',
  'React Native',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'HTML',
];
export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log({ value });
  return (
    <Stack>
      <Autocomplete
        options={skills}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
        renderInput={(params) => <TextField {...params} label='skills' />}
      />
    </Stack>
  );
};
