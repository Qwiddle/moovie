import './ResultList.css';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';


export const ResultList = ({data}) => {
  return (
    data ?
    <div className="results">
      {data.map((result) => (
        <div key={result.id} className="item">
          <div className="header">
            <IconButton aria-label="favorite" className="favorite">
              <FavoriteIcon sx={{color: red[800]}} />
            </IconButton>
            <h1>{result.name}</h1>
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