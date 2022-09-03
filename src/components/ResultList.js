import './ResultList.css';

export const ResultList = ({data}) => {
  return (
    data ?
    <div className="results">
      {data.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.name}</h1>
          <p>{movie.overview}</p>
          <strong>👀 {movie.popularity}</strong>{' '}
          <strong>✨ {movie.vote_average}</strong>{' '}
          <strong>🍴 {movie.vote_count}</strong>
        </div>
      ))}
    </div> : ''
  );
}