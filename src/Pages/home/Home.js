import { useEffect, useState } from 'react';
import { getPopularFilms } from 'components/services/themoviedbAPI';
import MovieList from 'components/movieList/MovieList';

export const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  // useEffect(() => {
  //   getPopularFilms().then(data => setPopularFilms(data)).catch(console.log);
  // }, []);
  // Аналог вызова асинхр ф-ии в useEffect //

  useEffect(() => {
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchPopular() {
      try {
        const data = await getPopularFilms(abortOptions);
        setPopularFilms(data.results);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchPopular();
    return () => abortController.abort();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={popularFilms} />
    </>
  );
};
