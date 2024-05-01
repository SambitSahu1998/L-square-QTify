import { Grid, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import styles from "../modules/SectionCard.module.css";

const Section = ({ title, albums }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleDisplay = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeaders}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>
          {title}
        </Typography>
        <Button
          variant="text"
          onClick={toggleDisplay}
          sx={{ fontWeight: "bold", color: "#34C94B" }}
        >
          {showAll ? "Collapse" : "Show All" }
        </Button>
      </div>
      {showAll ? (
        <Grid container spacing={1}>
          {albums.map((album) => (
            <Grid item key={album.id}>
              <Card album={album} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Carousel cards={albums} />
      )}
    </div>
  );
};

export default Section;
