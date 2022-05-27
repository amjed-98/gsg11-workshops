import React from 'react';
import MoviesProvider from './context/MoviesContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard, MoviesDetails, MoviesListPage, Home } from './pages';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
function App() {
  const isAuth = false;

  const navigate = useNavigate();
  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <Home />
      <MoviesProvider>
        <Routes>
          {/* / */}
          <Route index element={<h1>MOVIES</h1>} />

          {/* /movie*/}
          <Route path='/movie'>
            <Route index element={<MoviesListPage />} />

            {/* /movie/:id */}
            <Route path=':id'>
              <Route index element={<MoviesDetails />} />
              <Route path='rate' element={<h1>Rate Is Great</h1>} />
            </Route>
          </Route>

          {/* /dashboard */}
          <Route path='/dashboard'>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path='/private' element={<PrivateRoute isAuth={isAuth} />} />

          {/* /* */}
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </MoviesProvider>
    </div>
  );
}

export default App;
