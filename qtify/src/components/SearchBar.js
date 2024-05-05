import React from "react";
import { Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import styles from "../modules/SearchBar.module.css";

const SearchBar = () => {
  return (
    <Box className={styles.SearchBarBox}>
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.SearchInput}
      />
      <Button
        variant="text"
        startIcon={<SearchIcon sx={{color:'#000000'}}/>}
        className={styles.SearchButton}
      />
    </Box>
  );
}

export default SearchBar;
