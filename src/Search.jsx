import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Search({title,list}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={list}
      style={{background:'white',margin:'10px',}} size='small'
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
}