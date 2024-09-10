import { useState, useEffect, useRef } from "react";

// API
import API from "../API";

const initialState = {
    pages: 0,
    results: [], 
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTearm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTearm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // Initial Render
  useEffect(() => {
    fetchMovies(1);
  }, []); // [] is called dependency array

  return { state, loading, error };
};
