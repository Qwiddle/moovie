import { SearchBar } from './SearchBar';
import { Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <main className="App">
      <Typography variant="h1" component="h2" className="logo">
        Moovie 🐮
      </Typography>

      <SearchBar />
    </main>
  );
}

export default App;
