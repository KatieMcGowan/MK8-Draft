import './App.css';
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import StartScreen from './pages/StartScreen';
import DraftSelect from './pages/DraftSelect';
import Results from './pages/Results';
import DatabaseTesting from './components/DatabaseTesting/DatabaseTesting';

// Database
import data from './data.json';

const App = () => {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path={"/"} element={<StartScreen setPlayers={setPlayers}/>} />
        <Route path={"/draft"} element={<DraftSelect players={players} setPlayers={setPlayers} data={data}/>} />
        <Route path={"/results"} element={<Results players={players} setPlayers={setPlayers} data={data}/>} />
        <Route path={"/databasetesting"} element={<DatabaseTesting data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;

//BIG FIXES
//Autodraft not at 1 second but 0
//Autodraft changes css then delays response for populating character info
//Don't allow users to have same name
