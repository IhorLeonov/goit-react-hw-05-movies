import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a59dfea75e9e40e203f0819879862061';

export const getPopularFilms = async abortOptions => {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1`;
  const response = await axios.get(url, abortOptions);
  return response.data;
};

export const getMovieByName = async (quary, abortOptions) => {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${quary}&page=1&language=en-US&include_adult=false`;
  const response = await axios.get(url, abortOptions);
  return response.data;
};

export const getInfoByMovieId = async (movieId, abortOptions) => {
  const url = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url, abortOptions);
  return response.data;
};

export const getCastOfMovie = async (movieId, abortOptions) => {
  const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url, abortOptions);
  return response.data;
};

export const getMovieReviews = async (movieId, abortOptions) => {
  const url = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url, abortOptions);
  return response.data;
};

export const getMovieVideo = async (movieId, abortOptions) => {
  const url = `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}`;
  const response = await axios.get(url, abortOptions);
  return response.data;
};
