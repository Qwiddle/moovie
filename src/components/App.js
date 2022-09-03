import { SearchBar } from './SearchBar';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import './App.css';

function App() {
  return (
    <main className="App">
      <ResponsiveAppBar />
      <div className="appcontainer">
        <Typography variant="h2" component="h2" className="logo">
          Moovie 🐮
        </Typography>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
