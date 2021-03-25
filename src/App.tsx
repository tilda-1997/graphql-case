import React from 'react';
import './App.css';
import DynamicSearch from "./Component/dynamic"
import SearchBarByTitle from './Component/searchBar';
import SearchBarByCha from './Component/searchCharacter';

function App() {
  return (
    <div>
      <header className = "App-header">
        <h1> GraphQL Case </h1>
        <p>This site uses the offical API named AniList, which contains anime and manga datum.</p>

        <DynamicSearch />

        {/* <SearchBarByTitle /> <SearchBarByCha /> */}
      </header>
    </div>
  );
}

export default App;
