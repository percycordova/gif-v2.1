import './App.css';
import React from 'react';
import { Route } from 'wouter';
import Home from './pages/Home';
import StaticContex from './context/StaticContex';
import { GifsContextProvider } from './context/GifsContext';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';


function App() {


  return (

    <StaticContex.Provider
      value={
        {
          name: 'percy',
          suscribeteAlCanal: true
        }
      }>

      <GifsContextProvider>
        <div className="App">
          <Route
            component={Home}
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"
          />
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </div>

      </GifsContextProvider>

    </StaticContex.Provider>

  )
};

export default App;
