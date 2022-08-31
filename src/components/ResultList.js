import { useQuery } from 'react-query';
import './ResultList.css';

export const ResultList = () => {
  const { isLoading, error, data } = useQuery(['repoData'], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_TMDB}`)
    return res.json();
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="results">
      {data.results.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <strong>👀 {movie.popularity}</strong>{' '}
          <strong>✨ {movie.vote_average}</strong>{' '}
          <strong>🍴 {movie.vote_count}</strong>
        </div>
      ))}
    </div>
  );
}