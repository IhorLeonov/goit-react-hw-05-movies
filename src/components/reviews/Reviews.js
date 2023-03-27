import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/services/themoviedbAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchReviews() {
      try {
        const data = await getMovieReviews(movieId, abortOptions);
        setMovieReviews(data.results);
      } catch (err) {
        console.log('Error');
      }
    }

    fetchReviews();
    return () => abortController.abort();
  }, [movieId]);

  return (
    <ul>
      {movieReviews.length > 0 ? (
        movieReviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movies.</p>
      )}
    </ul>
  );
};

export default Reviews;
