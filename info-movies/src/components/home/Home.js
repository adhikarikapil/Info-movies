import React from "react";
// API
import API from "../../API";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

// Components

// Hooks
import { useState, useEffect } from "react";

// Image
import NoImage from "../../images/no_image.jpg";
import apiSettings from "../../API";

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTearm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTearm, page);
      console.log(movies);
    } catch (error) {
      setError(true);
    }
  };

  // Initial Render
  useEffect(() => {
    fetchMovies(1);
  }, []);   // [] is called dependency array

  return (
    <>
      <div>
        <h2>This is Home Page.</h2>
      </div>
    </>
  );
};

export default Home;
