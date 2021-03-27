import React from 'react';
import './App.css';
import DynamicSearch from "./Component/dynamic"
import SearchBarByTitle from './Component/Search/searchByName';
import SearchBarByCha from './Component/Search/searchCharacter';

function App() {
  return (
    <div>
      <header className = "App-header">
        <h1> &nbsp; GraphQL Case </h1>
        <p> &nbsp; This site uses the offical API named AniList, which contains anime and manga datum.</p>

        <DynamicSearch />

        {/* <SearchBarByTitle /> <SearchBarByCha /> */}
      </header>
    </div>
  );
}

export default App;
