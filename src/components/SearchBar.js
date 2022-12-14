import { useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import TuneIcon from '@mui/icons-material/Tune';
import { ResultList } from './ResultList';
import { Filter } from './Filter';
import './css/SearchBar.css';
import { IconButton, 
  TextField, 
  Typography, 
  Button 
} from '@mui/material';

export const SearchBar = () => {
  const [ input, setInput ] = useState("");
  const [ openFilterView, setFilterView ] = useState(false);

  const handleFilterOpen = () => setFilterView(true);
  const handleFilterClose = () => setFilterView(false);
  
  const handleFilterChange = useCallback((f) => { setFilters(f); }, []);

  //should save to localStorge & pull from there
  const [ filters, setFilters ] = useState({
    lang: 'en',
    type: 'movie',
    movie: true,
    tv: true,
    adult: false,
    region: 'us',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.elements["outlined-basic"].value.toLowerCase());
  }

  const { isLoading, data } = useQuery(['search', input], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_TMDB}&query=${input}`)
    return await res.json();
  }, { 
    enabled: !!input 
  });

  return (
    <>
      <Typography 
        variant="h2" 
        component="h2" 
        className="logo">
        Moovie 🐮
      </Typography>
      <form onSubmit={handleSubmit}>
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
            <Button 
              variant="contained" 
              className="button" 
              type="submit">
              Search
            </Button>
          </div>
          <IconButton 
            aria-label="filter" 
            id="filter" 
            onClick={handleFilterOpen}>
            <TuneIcon />
          </IconButton>
        </div>
      </form>
      <div className="searchresults">
        { isLoading
          ? 'Loading...'
          : <ResultList data={data} filters={filters}/>
        }
      </div>
      <div className='filtermodal'>
        { openFilterView ?
          <Filter
            props={{
              filters, 
              handleFilterChange, 
              openFilterView, 
              handleFilterClose
            }} /> : ''
        }
      </div>
    </>
  );
}