import React from 'react';
import './App.css';
import SearchBarByTitle from './Component/searchBar';
import SearchBarByYear from './Component/searchByYear';

function App() {
  return (
    <div>
      <header className = "App-header">
        <h1> GraphQL Case</h1>
        <p>This site uses the offical API named AniList, which contains anime and manga datum.</p>
        <SearchBarByTitle />
        <SearchBarByYear />
      </header>
    </div>
  );
}

export default App;
