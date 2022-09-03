import { useState, useCallback } from 'react';
import { IconButton, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { ResultList } from './ResultList';
import { Filter } from './Filter';
import { useQuery } from 'react-query';

export const Trending = () => {
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

  const { isLoading, data } = useQuery(['trending'], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/trending?api_key=${process.env.REACT_APP_API_TMDB}&media_type=all`)
    const json = await res.json();

    return json;
  });

  return (
    <>
      <Typography variant="h3" component="h3" className="logo">
        Trending 🔥
      </Typography>
      <IconButton aria-label="filter" id="filter" onClick={handleFilterOpen}>
        <TuneIcon />
      </IconButton>
      <div className="trendingresults">
        { isLoading
          ? 'Loading...'
          : <ResultList data={data} filters={filters}/>
        }
      </div>
      <div className='filtermodal'>
        { openFilterView ?
          <Filter props={{filters, handleFilterChange, openFilterView, handleFilterClose}} />
          : ''
        }
      </div>
    </>
  );
}