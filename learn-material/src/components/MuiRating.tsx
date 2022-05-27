import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Rating, Stack } from '@mui/material';
import React, { useState } from 'react';

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);

  console.log(value);

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={6} width='250px'>
      <Rating
        // value={value}
        onChange={handleChange}
        icon={<Favorite fontSize='inherit' color='error' />}
        emptyIcon={<FavoriteBorder fontSize='inherit' />}
        precision={0.5}
        size='large'
        // readOnly
        defaultValue={3.6}
        // highlightSelectedOnly
      />
    </Stack>
  );
};
