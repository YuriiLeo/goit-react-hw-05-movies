// import ReviewsGallery from 'components/Reviews/ReviewsGallery/ReviewsGallery';
import Loader from 'components/Loader/Loader';
import Warnings from 'components/Warnings/Warnings';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/ApiMovie';
import ReviewsList from './ReviewsList/ReviewsList';

export default function Reviews() {
 const [movieReviews, setMovieReviews] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const { movieId } = useParams();
const id = movieId;
console.log(movieId);
  
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieReviews(id);
        setMovieReviews(result.results);

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [id]);

  if (!movieReviews) {
    return null;
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Warnings text="Please, try again later" />}
      {movieReviews.length === 0 && <Warnings text="We don't have any reviews for this movie." />}
      {movieReviews.length > 0 && <p>We have {movieReviews.length} reviews for this movie</p>}
      {movieReviews.length > 0 && <ReviewsList items={movieReviews} />}
    </div>
  )
}
