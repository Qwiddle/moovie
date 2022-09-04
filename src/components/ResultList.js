import './ResultList.css';
import { Favorite } from './Favorite';
import { Link } from 'react-router-dom';

export const ResultList = ({data, filters}) => {
  // this could probably be written a lot cleaner, refactor incoming
  const filterResults = (json) => {
    const results = json.results.map((result) => {
      if(filters.movie && result.title) { 
        result = { name: result.title, ...result};
      } else if(result.known_for) {
        //do something
      } else if(filters.tv && result.name) {
        result = { name: result.name, ...result};
      }

      return result;

    }).filter((result) => {
      if(result.media_type === 'tv' && !filters.tv) {
        return false;
      } else if(result.media_type === 'movie' && !filters.movie) {
        return false;
      } else if(result.media_type === 'person') {
        return false;
      }

      return true;
    });

    return results;
  }
  
  return (
    data ?
    <div className="results">
      {filterResults(data).map((result) => (
        <div 
          key={result.id} 
          cid={result.id} 
          type={result.media_type} 
          className="item">
          <div className="header">
            <Link to={`../${result.media_type}/${result.id}`} style={{textDecoration: 'none'}}>
              <h1>{result.name}</h1>
            </Link>
            <Favorite cid={result.id} type={result.media_type}/>
          </div>
          <p>{result.overview}</p>
          <strong>👀 {result.popularity}</strong>{' '}
          <strong>✨ {result.vote_average}</strong>{' '}
          <strong>🍴 {result.vote_count}</strong>
        </div>
      ))}
    </div> : ''
  );
}