import React from 'react';
import {TextField, Button, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchOutlined';

function SearchBar() {
  return (
    <Box display="flex" alignItems="center">
        <TextField placeholder="Search a album of your choice" variant="outlined" size="small" />
        <Button variant="outlined" startIcon={<SearchIcon/>} />
    </Box>
  )
}

export default SearchBar;