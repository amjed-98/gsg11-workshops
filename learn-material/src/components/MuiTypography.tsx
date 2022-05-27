import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1' gutterBottom>
        h1 Heading
      </Typography>
      <Typography variant='h2' gutterBottom>
        h2 Heading
      </Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti modi sequi,
        consectetur dolore sed repudiandae facilis molestias excepturi, laborum reiciendis
        vitae qui nulla porro quibusdam, nobis fugiat soluta dolorem.
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil, modi, saepe
        voluptatem quam similique sint doloremque, voluptatum accusantium sunt officiis ullam
        exercitationem magni nam velit aperiam fuga tempore officia.
      </Typography>
    </div>
  );
};
