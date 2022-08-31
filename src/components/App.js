import { SearchBar } from './SearchBar';
import { Typography } from '@mui/material';
import './App.css';
import { ResultList } from './ResultList';

function App() {
  return (
    <main className="App">
      <Typography variant="h2" component="h2" className="logo">
        Moovie 🐮
      </Typography>
      <SearchBar />
      <ResultList />
    </main>
  );
}

export default App;
