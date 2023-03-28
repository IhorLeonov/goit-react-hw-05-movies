import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieVideo } from 'components/services/themoviedbAPI';
import { Player, PlayerWrapper } from './Trailer.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [trailerUrl, setTrailerUrl] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchReviews() {
      try {
        const data = await getMovieVideo(movieId, abortOptions);
        const trailer = data.results.filter(item => item.type === 'Trailer')[0];

        if (!trailer) return;

        setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);

        console.log(trailerUrl);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchReviews();
    return () => abortController.abort();
  }, [movieId, trailerUrl]);

  return (
    <PlayerWrapper>
      <Player
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
      />
    </PlayerWrapper>
  );
};

export default Reviews;
