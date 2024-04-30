import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/SectionCard";
import { NEW_ALBUMS_API, TOP_ALBUMS_API } from "./apis/api";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
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
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div>
        <Section title="Top Albums" albums={topAlbums} />
        <div></div>
        <Section title="New Albums" albums={newAlbums} />
      </div>
    </div>
  );
};

export default App;
