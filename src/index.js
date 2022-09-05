import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'typeface-roboto'
import App from './components/App';
import { Trending } from './components/Trending';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchBar } from './components/SearchBar';
import { Favorites } from './components/Favorites';
import { Movie } from './components/Movie';
import { Recommend } from './components/Recommend';
import { TV } from './components/TV';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<SearchBar />} />
            <Route path="trending" element={<Trending />} />
            <Route path="search" element={<SearchBar />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="movie/:cid" element={<Movie />} />
            <Route path="tv/:cid" element={<TV />} />
            <Route path="recommend/:type/:cid" element={<Recommend />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
