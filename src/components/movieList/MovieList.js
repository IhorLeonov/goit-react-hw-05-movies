import { Link, useLocation } from 'react-router-dom';
import {
  MovieListStyled,
  MovieTitle,
  MoviePoster,
  MovieItem,
} from 'components/movieList/MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListStyled>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviePoster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
              }
              alt={`Poster ${title}`}
            />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </MovieListStyled>
  );
};

export default MovieList;
