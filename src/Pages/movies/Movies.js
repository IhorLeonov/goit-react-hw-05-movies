import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { getMovieByName } from 'components/services/themoviedbAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import MovieList from 'components/movieList/MovieList';
import { GrFormSearch } from 'react-icons/gr';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Movies.styled';

const Movies = () => {
  const [foundFilms, setFoundFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchMovie() {
      try {
        const data = await getMovieByName(searchQuery, abortOptions);
        setFoundFilms(data.results);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchMovie();
    return () => abortController.abort();
  }, [searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchbarHeader>
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
          <SearchForm>
            <SearchFormButton type="submit">
              <GrFormSearch size="25px"></GrFormSearch>
              <SearchFormButtonLabel></SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              name="inputQuary"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Choose your movie!"
            />
          </SearchForm>
        </Formik>
      </SearchbarHeader>
      {foundFilms.length > 0 && <MovieList movies={foundFilms} />}
      <ToastContainer />
    </>
  );
};

export default Movies;
