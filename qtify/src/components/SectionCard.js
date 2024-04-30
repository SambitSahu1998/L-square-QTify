import { Grid, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../modules/SectionCard.module.css";

const Section = ({ title, albums }) => {
  const [showAll, setShowAll] = useState(false);
  const [displayedAlbums, setDisplayedAlbums] = useState([]);

  useEffect(() => {
    const initialDisplayedAlbums = albums;
    setDisplayedAlbums(initialDisplayedAlbums);
  }, [albums]);

  const toggleDisplay = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setDisplayedAlbums(albums);
    } else {
      const subsetOfAlbums = albums.slice(0, 7);
      setDisplayedAlbums(subsetOfAlbums);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeaders}>
        <Typography variant="h5" sx={{fontWeight:"bold", color:"#FFFFFF"}}>{title}</Typography>
        <Button variant="text" onClick={toggleDisplay} sx={{fontWeight:"bold",color:"#34C94B"}}>
          {showAll ? "Collapse" : "Show all"}
        </Button>
      </div>
      <Grid container spacing={1}>
        {displayedAlbums.map((album) => (
          <Grid item key={album.id}>
            <Card album={album} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;