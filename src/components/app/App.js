import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/sharedLayout/SharedLayout';
import NotFound from 'Pages/notFound/NotFound';
import { lazy } from 'react';

const Movies = lazy(() => import('Pages/movies/Movies'));
const MovieDetails = lazy(() => import('Pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));
const Trailer = lazy(() => import('components/trailer/Trailer'));
const Home = lazy(() =>
  import('Pages/home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
); // лайфак для именованого экспорта //

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
