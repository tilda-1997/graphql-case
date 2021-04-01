import React from 'react';
import './App.css';
import DynamicSearch from "./Component/dynamic"
import SearchBarByTitle from './Component/Search/searchByName';
import SearchBarByCha from './Component/Search/searchCharacter';
import { Intro } from './Component/styled'

function App() {
  return (
    <div>
      <header className = "App-header">
        <Intro>
        <h1> &nbsp; &dagger; GraphQL Case </h1>
        <h3> &nbsp; This site uses the offical API named AniList, which contains anime and manga datum.</h3>
        </Intro>
        <DynamicSearch />

        {/* <SearchBarByTitle /> <SearchBarByCha /> */}
      </header>
    </div>
  );
}

export default App;
