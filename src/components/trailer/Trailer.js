import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieVideo } from 'components/services/themoviedbAPI';
import { Player, PlayerWrapper } from './Trailer.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchReviews() {
      try {
        const data = await getMovieVideo(movieId, abortOptions);
        const trailer = data.results.filter(item => item.type === 'Trailer')[0];

        if (!trailer) return;

        setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
        setIsLoading(false);
      } catch (err) {
        if (err.code === 'ERR_CANCELED') return;

        console.log('Error');
      }
    }

    fetchReviews();
    return () => abortController.abort();
  }, [movieId, trailerUrl]);

  return (
    <>
      {trailerUrl !== '' && (
        <PlayerWrapper>
          <Player url={trailerUrl} width="100%" height="100%" />
        </PlayerWrapper>
      )}
      {trailerUrl === '' && !isLoading && (
        <p>We don't have any information about cast for this movies.</p>
      )}
    </>
  );
};

export default Reviews;
