import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCastOfMovie } from 'components/services/themoviedbAPI';
import { CastDesc, CastItem, CastList } from './Cast.styled';
import { useOutletContext } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible] = useOutletContext();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchCast() {
      try {
        const data = await getCastOfMovie(movieId, abortOptions);
        setMovieCast(data.cast);
        setIsLoading(false);
      } catch (err) {
        if (err.code === 'ERR_CANCELED') return;

        console.log('Error');
      } finally {
      }
    }

    fetchCast();
    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {isVisible && (
        <CastList>
          {movieCast.length > 0 &&
            movieCast.map(({ id, profile_path, name, character }) => (
              <CastItem key={id}>
                <div>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={`Poster ${name}`}
                      width="280px"
                      height="420px"
                    />
                  ) : (
                    <p>Photo {name} must be here</p>
                  )}
                </div>
                <CastDesc>{name}</CastDesc>
                <CastDesc>Character: {character}</CastDesc>
              </CastItem>
            ))}
          {movieCast.length === 0 && !isLoading && (
            <p>We don't have any information about cast for this movies.</p>
          )}
        </CastList>
      )}
    </>
  );
};

export default Cast;
