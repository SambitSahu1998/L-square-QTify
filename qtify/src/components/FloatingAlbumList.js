import React from "react";
import styles from  "../modules/FloatingAlbumList.module.css";
import FloatingAlbumCard from "./FloatingAlbumCard";

const FloatingAlbumList = ({albumList}) => {
    return (
        <div className={styles.floatingAlbumList}>
          <div className={styles.AlbumListContainer}>
            <ul className={styles.AlbumList}>
              {albumList.map((album) => (
                <FloatingAlbumCard album={album}/>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default FloatingAlbumList;