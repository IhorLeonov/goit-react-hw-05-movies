import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/services/themoviedbAPI';
import { ReviewsItem, ReviewsList } from './Reviews.styled';
import { useOutletContext } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible] = useOutletContext();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    const abortOptions = { signal: abortController.signal };

    async function fetchReviews() {
      try {
        const data = await getMovieReviews(movieId, abortOptions);
        setMovieReviews(data.results);
        setIsLoading(false);
      } catch (err) {
        if (err.code === 'ERR_CANCELED') return;

        console.log('Error');
      } finally {
      }
    }

    fetchReviews();
    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {isVisible && (
        <ReviewsList>
          {movieReviews.length > 0 &&
            movieReviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </ReviewsItem>
            ))}
          {movieReviews.length === 0 && !isLoading && (
            <p>We don't have any reviews for this movies.</p>
          )}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
