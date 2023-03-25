import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getInfoByMovieId } from 'components/services/themoviedbAPI';
import { BackLink } from 'Pages/movieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await getInfoByMovieId(movieId);
        setMovieDetails(data);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchInfo();
  }, [movieId]);

  if (!movieDetails) return;

  const { genres, overview, poster_path, release_date, title, vote_average } =
    movieDetails;

  return (
    <div>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`Poster ${title}`}
            width="250px"
            height="375px"
          />
        ) : (
          <p>Poster must be here</p>
        )}
      </div>

      <h2>
        {title} ({release_date.slice(0, 4)})
      </h2>

      <p>User score: {Math.round(vote_average * 10)}%</p>

      <div>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>

      <div>
        <h4>Genres</h4>
        <p>{genres.length > 0 && genres.map(({ name }) => name).join(' ')}</p>
      </div>

      <div>
        <p>Additional information</p>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
