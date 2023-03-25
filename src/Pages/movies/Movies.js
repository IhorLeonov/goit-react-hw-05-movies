import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { getMovieByName } from 'components/services/themoviedbAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import MovieList from 'components/movieList/MovieList';

const Movies = () => {
  const [foundFilms, setFoundFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovie() {
      try {
        const data = await getMovieByName(searchQuery);
        setFoundFilms(data.results);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchMovie();
  }, [searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Formik
        initialValues={{ inputQuary: '', isSubmitting: true }}
        onSubmit={(values, actions) => {
          const { resetForm } = actions;
          const { inputQuary } = values;

          if (inputQuary.trim() === '') {
            toast.error('Enter search query!', {
              position: 'top-left',
              autoClose: 500,
            });
            return;
          }
          updateQueryString(inputQuary);
          resetForm();
        }}
      >
        <Form>
          <Field name="inputQuary" type="text" autoComplete="off" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {foundFilms.length > 0 && <MovieList movies={foundFilms} />}
      <ToastContainer />
    </>
  );
};

export default Movies;
