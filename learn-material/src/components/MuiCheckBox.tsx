import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import React, { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export const MuiCheckBox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log(skills);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(target.checked);
  };

  const handleSkillsChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const skillIndex = skills.indexOf(target.value);

    if (skillIndex === -1) {
      return setSkills([...skills, target.value]);
    }
    setSkills([...skills.slice(0, skillIndex), ...skills.slice(skillIndex + 1)]);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label='i accept terms and conditions'
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skill</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='HTML'
              value='html'
              control={
                <Checkbox
                  size='small'
                  color='secondary'
                  checked={skills.includes('html')}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label='CSS'
              value='css'
              control={
                <Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} />
              }
            />
            <FormControlLabel
              label='JavaScript'
              value='javascript'
              control={
                <Checkbox
                  checked={skills.includes('javascript')}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
