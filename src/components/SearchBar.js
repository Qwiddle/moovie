import { useState } from 'react';
import './SearchBar.css';
import TextField from "@mui/material/TextField";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value.toLowerCase());
  }

  return (
    <div className="searchbar">
      <TextField
        className="input"
        id="outlined-basic"
        onChange={handleInput}
        variant="outlined"
        fullWidth
        label="Search"
      />
    </div>
  );
}