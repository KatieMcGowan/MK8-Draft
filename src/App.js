import './App.css';
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import StartScreen from './pages/StartScreen';
import DraftSelect from './pages/DraftSelect';
import Results from './pages/Results';

const App = () => {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path={"/"} element={<StartScreen setPlayers={setPlayers}/>} />
        <Route path={"/draft"} element={<DraftSelect players={players} setPlayers={setPlayers}/>} />
        <Route path={"/results"} element={<Results players={players} setPlayers={setPlayers}/>} />
      </Routes>
    </div>
  );
}

export default App;
