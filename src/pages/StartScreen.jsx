import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  return(
    <div className="startscreen-wrapper">
      <h1 className="app-header">MK8 Deluxe Draft</h1>
      <form>
        <div className="draft-set-up-questions">
          <div className="how-many-players-wrapper">
              <label htmlFor="players">How many players are in your lobby?</label>
              <input
                type="number"
                min="1"
                max="12"
                required={true}
              />  
          </div>
          <p className="placement-options-text">Placement options:</p>
          <div className="placement-options">
            <button className="placement-buttons">Previous winners go first</button>
            <button className="placement-buttons">Previous losers go first</button>
            <button className="placement-buttons">Randomize placement</button>
          </div>
        </div>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default StartScreen;