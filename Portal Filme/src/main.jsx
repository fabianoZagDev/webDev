import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Contato from './pages/Contato.jsx';
import GenreList from './pages/GenreListPage.jsx'; // Corrigido
import Home from './pages/Home.jsx';
import MovieDetailPage from './pages/MovieDetailPage.jsx';
import MovieListPage from './pages/MovieListPage.jsx';
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'; // Corrigido
import PageNotFound from './pages/PageNotFound.jsx';
import WatchlistPage from './pages/WatchListPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/movies', element: <MovieListPage /> },
      { path: '/movies/:id', element: <MovieDetailPage /> },
      { path: '/genres', element: <GenreList /> }, // Corrigido para '/genres'
      { path: '/genres/:genreId', element: <MoviesByGenrePage /> }, // Corrigido para '/genres/:genreId'
      { path: '/contato', element: <Contato /> },
      { path: '*', element: <PageNotFound /> },
      { path: '/watchlist', element: <WatchlistPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
