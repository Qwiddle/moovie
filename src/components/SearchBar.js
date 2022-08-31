import { useState } from 'react';
import './SearchBar.css';
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { ResultList } from './ResultList';
import { useQuery } from 'react-query';

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value.toLowerCase());
  }
  
  const handleEnter = (e) => {
    e.preventDefault();
    //do something
  }

  const handleClick = (e) => {
    e.preventDefault();
    //do something
  }

  const { isLoading, error, data } = useQuery(['repoData'], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_TMDB}`)
    return res.json();
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    //form handles hitting enter in an active search bar however it does not handle button clicks.
    <>
      <form onSubmit={handleEnter}>
        <div className="searchbar">
          <div className="bar">
            <TextField
              className="input"
              id="outlined-basic"
              onChange={handleInput}
              variant="outlined"
              fullWidth
              label="Search" />
          </div>

          <div className="searchbutton">
            <Button variant="contained" className="button" onClick={handleClick}>Search</Button>
          </div>
        </div>
      </form>
      <div className="searchresults">
        {isLoading 
          ? 'Loading...'
          : <ResultList data={data}/>}
      </div>
    </>
  );
}