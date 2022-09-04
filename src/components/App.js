import { SearchBar } from './SearchBar';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <main className="App">
      <ResponsiveAppBar />
      <div className="appcontainer">
        <Outlet context={[favorites, setFavorites]} />
      </div>
    </main>
  );
}

export default App;
