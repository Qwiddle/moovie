import { SearchBar } from './SearchBar';
import { Typography } from '@mui/material';
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
        <SearchBar />
      </div>
    </main>
  );
}

export default App;
