import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search for something"
      fullWidth
      sx={{
        backgroundColor: '#f5f7fb',
        borderRadius: '999px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '999px',
          paddingLeft: 1,
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        input: {
          color: '#7a8bb1',
          fontSize: '16px',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#7a8bb1' }} />
          </InputAdornment>
        ),
      }}
    />
  );
}