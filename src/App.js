import './App.css';
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"
import StartScreen from './pages/StartScreen';
import DraftSelect from './pages/DraftSelect';
import Results from './pages/Results';

const App = () => {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<StartScreen />} />
        <Route path={"/draft"} element={<DraftSelect />} />
        <Route path={"/results"} element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
