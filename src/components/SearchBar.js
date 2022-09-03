import { useState, useCallback } from 'react';
import './SearchBar.css';
import { IconButton, TextField } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { Button } from '@mui/material';
import { ResultList } from './ResultList';
import { Filter } from './Filter';
import { useQuery } from 'react-query';

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
    tv: false,
    adult: false,
    region: 'us',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.elements["outlined-basic"].value.toLowerCase());
  }

  const { isLoading, data } = useQuery(['search', input], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_TMDB}&query=${input}`)
    const json = await res.json();

    /* this could probably be written a lot cleaner, refactor incoming lol */
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
      if(result.media_type == 'tv' && !filters.tv) {
        return false;
      } else if(result.media_type == 'movie' && !filters.movie) {
        return false;
      } else if(result.media_type == 'person') {
        //not handling people atm
      } else {
        return true;
      }
    });

    return results;
  }, { 
    enabled: !!input 
  });

  return (
    <>
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
            <Button variant="contained" className="button" type="submit">Search</Button>
          </div>
          <IconButton aria-label="filter" id="filter" onClick={handleFilterOpen}>
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
      <div className='filtermodal'>
        {
          openFilterView ?
          <Filter props={{filters, handleFilterChange, openFilterView, handleFilterClose}} />
          : ''
        }
      </div>
    </>
  );
}