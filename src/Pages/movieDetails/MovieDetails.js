import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getInfoByMovieId } from 'components/services/themoviedbAPI';
import {
  BackLink,
  MoviePoster,
  MovieInfo,
  MovieDescription,
  MovieDescriptionItem,
  Border,
  AdditionalBox,
  AdditionalItem,
} from 'Pages/movieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchInfo() {
      try {
        const data = await getInfoByMovieId(movieId, abortOptions);
        setMovieDetails(data);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchInfo();
    return () => abortController.abort();
  }, [movieId]);

  if (!movieDetails) return;

  const { genres, overview, poster_path, release_date, title, vote_average } =
    movieDetails;

  return (
    <div>
      <BackLink to={backLinkRef.current}>Back to movies</BackLink>
      <MovieInfo>
        <MoviePoster>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`Poster ${title}`}
              width="100%"
            />
          ) : (
            <p>Poster must be here</p>
          )}
        </MoviePoster>

        <MovieDescription>
          <ul>
            <MovieDescriptionItem>
              <h2>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p>User score: {Math.round(vote_average * 10)}%</p>
            </MovieDescriptionItem>
            <MovieDescriptionItem>
              <h3>Overview</h3>
              <p>{overview}</p>
            </MovieDescriptionItem>
            <MovieDescriptionItem>
              <h4>Genres</h4>
              <p>
                {genres.length > 0 && genres.map(({ name }) => name).join(' ')}
              </p>
            </MovieDescriptionItem>
          </ul>
        </MovieDescription>
      </MovieInfo>
      <Border />

      <AdditionalBox>
        <p>Additional information</p>
        <ul>
          <AdditionalItem>
            <Link to="cast">Cast</Link>
          </AdditionalItem>
          <AdditionalItem>
            <Link to="reviews">Reviews</Link>
          </AdditionalItem>
        </ul>
      </AdditionalBox>

      <Border />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
