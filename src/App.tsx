import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './components/NotFoundPage';
import { getPeople } from './requests/people';

import './App.scss';

const App: React.FC = () => {
  const [people, usePeople] = useState<Person[] | null>(null);

  return (
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
          element={(
            <PeoplePage
              getPeople={getPeople}
              people={people}
              usePeople={usePeople}
            />
          )}
        />

        <Route
          path="/*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
