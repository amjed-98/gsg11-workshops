import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { Send, FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import React, { useState } from 'react';

export const MuiButton = () => {
  const [formats, setFormat] = useState<string | null>(null);

  console.log(formats);
  const handleFormatChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null,
  ) => {
    setFormat(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button>default</Button>
        <Button variant='text' href='/www.google.com'>
          text
        </Button>
        {/* main button login */}
        <Button variant='contained'>contained</Button>
        {/* cancel button go back button */}
        <Button variant='outlined'>outlined</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          success
        </Button>
      </Stack>

      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='large'>
          Large
        </Button>
        <Button variant='contained' size='medium'>
          medium
        </Button>

        <Button variant='contained' size='small'>
          Small
        </Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<Send />} onClick={() => alert(2)}>
          Send
        </Button>
        <Button variant='contained' endIcon={<Send />} disableElevation>
          Send
        </Button>

        <IconButton aria-label='send' color='success' size='small' children={<Send />} />
      </Stack>

      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          color='secondary'
          orientation='vertical'
          size='small'
          aria-label='alignment button group'>
          <Button onClick={alert}>Left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text formatting'
          value={formats}
          onChange={handleFormatChange}
          color='success'
          size='small'
          orientation='vertical'
          exclusive>
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBold />
          </ToggleButton>

          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalic />
          </ToggleButton>

          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
