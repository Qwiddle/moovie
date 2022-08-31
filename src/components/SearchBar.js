import { useState } from 'react';
import './SearchBar.css';
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value.toLowerCase());
  }

  return (
    <div className="searchbar">
      <div className="bar">
        <TextField
          className="input"
          id="outlined-basic"
          onChange={handleInput}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div className="searchbutton">
        <Button variant="contained" className="button">Search</Button>
      </div>
    </div>
  );
}