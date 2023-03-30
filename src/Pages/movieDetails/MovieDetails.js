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
  AdditionalList,
} from 'Pages/movieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [target, setTarget] = useState('');

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
        if (err.code === 'ERR_CANCELED') return;

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
      <BackLink to={backLinkRef.current}>Back</BackLink>
      <MovieInfo>
        <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
          }
          alt={`Poster ${title}`}
          width="100%"
        />

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
              <h3>Genres</h3>
              <p>
                {genres.length > 0 && genres.map(({ name }) => name).join(' ')}
              </p>
            </MovieDescriptionItem>
          </ul>
        </MovieDescription>
      </MovieInfo>
      <Border />

      <AdditionalBox>
        <h4>Additional information</h4>
        <AdditionalList>
          <AdditionalItem
            onClick={() => {
              if (target === 'cast') {
                setIsVisible(prevState => !prevState);
                return;
              }
              setIsVisible(true);
              setTarget('cast');
            }}
          >
            <Link to="cast">Cast</Link>
          </AdditionalItem>
          <AdditionalItem
            onClick={() => {
              if (target === 'reviews') {
                setIsVisible(prevState => !prevState);
                return;
              }
              setIsVisible(true);
              setTarget('reviews');
            }}
          >
            <Link to="reviews">Reviews</Link>
          </AdditionalItem>
          <AdditionalItem
            onClick={() => {
              if (target === 'trailer') {
                setIsVisible(prevState => !prevState);
                return;
              }
              setIsVisible(true);
              setTarget('trailer');
            }}
          >
            <Link to="trailer">Trailer</Link>
          </AdditionalItem>
        </AdditionalList>
      </AdditionalBox>

      <Border />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet context={[isVisible]} />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
