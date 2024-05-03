import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/SectionCard";
import {
  FAQ_API,
  GENRES_API,
  NEW_ALBUMS_API,
  SONGS_API,
  TOP_ALBUMS_API,
} from "./apis/api";
import { Box } from "@mui/material";
import FaqAccordion from "./components/FaqAccordion";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [faqsAcc, setFaqsAcc] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(TOP_ALBUMS_API);
        setTopAlbums(response.data);
      } catch (error) {
        console.error("Error Fetching Top Albums Array: ", error);
      }
    };
    const fetchNewAlbums = async () => {
      try {
        const response = await axios.get(NEW_ALBUMS_API);
        setNewAlbums(response.data);
      } catch (error) {
        console.error("Error Fetching New Albums Array: ", error);
      }
    };
    const fetchAllSongs = async () => {
      try {
        const response = await axios.get(SONGS_API);
        setAllSongs(response.data);
      } catch (error) {
        console.error("Erro Fetching All Songs Array: ", error);
      }
    };
    const fetchGenres = async () => {
      try {
        const response = await axios.get(GENRES_API);
        setGenres(response.data.data);
      } catch (error) {
        console.error("Error Fetching The Genres Array: ", error);
      }
    };
    const fetchAPI = async () => {
      try{
        const response = await axios.get(FAQ_API);
        setFaqsAcc(response.data.data);
      }catch(error){
        console.error("Error Fetching The FAQ Array: ", error);
      }
    };
    fetchTopAlbums();
    fetchNewAlbums();
    fetchAllSongs();
    fetchGenres();
    fetchAPI();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div>
        <Section title="Top Albums" albums={topAlbums} />
        <div></div>
        <Section title="New Albums" albums={newAlbums} />
        <div></div>
        <Box
          sx={{
            borderTop: "2px solid #34C94B",
            borderBottom: "2px solid #34C94B",
          }}
        >
          <Section title="Songs" songs={allSongs} genres={genres}/>
        </Box>
      </div>
      <FaqAccordion faqs={faqsAcc} />
    </div>
  );
};

export default App;
