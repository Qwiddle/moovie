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
        <Outlet />
      </div>
    </main>
  );
}

export default App;
