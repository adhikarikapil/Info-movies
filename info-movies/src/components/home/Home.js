import React from "react";
// API
import API from "../../API";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

// Components
import HeroImage from "../HeroImage/heroImageIndex";

// Hooks
import { useState, useEffect } from "react";
import { useHomeFetch } from "../../hooks/useHomeFetch";

// Image
import NoImage from "../../images/no_image.jpg";
import apiSettings from "../../API";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </>
  );
};

export default Home;
