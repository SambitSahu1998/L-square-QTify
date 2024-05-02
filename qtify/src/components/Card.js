import React from "react";
import {
  Card as MuiCard,
  CardMedia,
  Chip,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import styles from "../modules/Card.module.css";

const Card = ({ album, isSongSection }) => {
  return (
    <Box className={styles.cardOutlined}>
      <MuiCard sx={{ width: "159px", height: "215px", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          height="170px"
          image={album.image}
          alt={album.title}
          className={styles.cardImage}
        />
        {isSongSection === "Songs" ? (
          <CardContent sx={{ width: "100%", padding: "6px" }}>
            <Chip
              label={`${album.likes} Likes`}
              className={styles.chipInformation}
            />
          </CardContent>
        ) : (
          <CardContent sx={{ width: "100%", padding: "6px" }}>
            <Chip
              label={`${album.follows} Follows`}
              className={styles.chipInformation}
            />
          </CardContent>
        )}
      </MuiCard>
      <Typography variant="h6" component="h2" className={styles.albumTitle}>
        {album.title}
      </Typography>
    </Box>
  );
};

export default Card;
