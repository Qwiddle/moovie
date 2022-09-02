import { useState } from 'react';
import './SearchBar.css';
import { IconButton, TextField } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { Button } from '@mui/material';
import { ResultList } from './ResultList';
import { useQuery } from 'react-query';

export const SearchBar = () => {
  const filters = useState({
    lang: 'en',
    type: 'movie',
    adult: false,
    region: 'us',
  });

  const [input, setInput] = useState("");

  const { isLoading, data } = useQuery(['search', input], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_TMDB}&query=${input}`)
    return res.json();
  }, { enabled: !!input });

  const handleEnter = (e) => {
    e.preventDefault();
    setInput(e.target.elements["outlined-basic"].value.toLowerCase());
  }

  return (
    <>
      <form onSubmit={handleEnter}>
        <div className="searchbar">
          <div className="bar">
            <TextField
              className="input"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search" />
          </div>
          <div className="searchbutton">
            <Button variant="contained" className="button" type="submit">Search</Button>
          </div>
          <IconButton aria-label="filter" id="filter">
            <TuneIcon />
          </IconButton>
        </div>
      </form>
      <div className="searchresults">
        {
          isLoading
          ? 'Loading...'
          : <ResultList data={data}/>
        }
      </div>
    </>
  );
}