import { useEffect, useState } from 'react';
import { getPopularFilms } from 'components/services/themoviedbAPI';
import MovieList from 'components/movieList/MovieList';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  // useEffect(() => {
  //   getPopularFilms().then(data => setPopularFilms(data)).catch(console.log);
  // }, []);

  useEffect(() => {
    async function fetchPopular() {
      try {
        const data = await getPopularFilms();
        setPopularFilms(data.results);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchPopular();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={popularFilms} />
    </>
  );
};

export default Home;
