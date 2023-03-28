import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCastOfMovie } from 'components/services/themoviedbAPI';
import { CastDesc, CastItem, CastList } from './Cast.styled';
import { useOutletContext } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isVisible] = useOutletContext();

  useEffect(() => {
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchCast() {
      try {
        const data = await getCastOfMovie(movieId, abortOptions);
        setMovieCast(data.cast);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchCast();
    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {isVisible && (
        <CastList>
          {movieCast.length > 0 ? (
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
            ))
          ) : (
            <p>We don't have any information about cast for this movies.</p>
          )}
        </CastList>
      )}
    </>
  );
};

export default Cast;
