import React from 'react';
import './App.css'; // Import your App.css
import MovieList from './Movielist';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-header">Netflix Clone App</h1>
      <MovieList />
    </div>
  );
};

export default App;
