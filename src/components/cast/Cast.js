import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCastOfMovie } from 'components/services/themoviedbAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getCastOfMovie(movieId);
        setMovieCast(data.cast);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <div>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={`Poster ${name}`}
                  width="150px"
                />
              ) : (
                <p>Photo {name} must be here</p>
              )}
            </div>
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))
      ) : (
        <p>We don't have any information about cast for this movies.</p>
      )}
    </ul>
  );
};

export default Cast;
