import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './components/NotFoundPage';

import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route
        index
        element={<HomePage />}
      />

      <Route
        path="/home"
        element={<Navigate to="/" />}
      />
      <Route
        path="/people"
        element={<PeoplePage />}
      />

      <Route
        path="/*"
        element={<NotFoundPage />}
      />
    </Routes>
  </div>
);

export default App;
