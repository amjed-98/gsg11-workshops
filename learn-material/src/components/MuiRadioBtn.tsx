import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  TextField,
  Input,
  useFormControl,
} from '@mui/material';
import React, { useRef, useState } from 'react';

export const MuiRadioBtn = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState<any>('');
  console.log(value);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleText = (e: any) => {
    console.dir(e.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id='jop-experience-group-label'>Year of Experience</FormLabel>
        <RadioGroup
          name='job-experience-group'
          aria-labelledby='job-experience-group-label'
          row
          onChange={handleChange}>
          <FormControlLabel
            control={<TextField size='small' color='secondary' />}
            label='0-2'
            color='primary'
            onChange={handleText}
          />
          <FormControlLabel
            control={<TextField size='small' color='secondary' />}
            label='0-2'
            color='primary'
            onChange={handleText}
          />
          <FormControlLabel
            control={<Radio size='medium' color='primary' />}
            label='3-5'
            value='3-5'
          />
          <FormControlLabel
            control={<Radio color='success' size='small' />}
            label='6-10'
            value='6-10'
          />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
