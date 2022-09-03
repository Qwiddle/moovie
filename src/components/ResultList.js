import './ResultList.css';

export const ResultList = ({data}) => {
  return (
    data ?
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
    </div> : ''
  );
}