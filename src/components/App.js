import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import './css/App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localFavorites = JSON.parse(window.localStorage.getItem('favorites'));

    if(localFavorites !== "[]")
      setFavorites(JSON.parse(localFavorites));
  }, []);

  useEffect(() => {
    //stringify used twice in order to properly store an object of arrays in localstorage
    window.localStorage.setItem('favorites', JSON.stringify(JSON.stringify(favorites)));
  }, [favorites]);

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
