import React, { useState } from "react";
import CharacterOptions from "../components/CharacterOptions";
import KartOptions from "../components/KartOptions";
import WheelOptions from "../components/WheelOptions";
import GliderOptions from "../components/GliderOptions"
import DraftCounter from "../components/DraftCounter";
import DraftPlayer from "../components/DraftPlayer"
import "./DraftSelect.css"

const DraftSelect = (props) => {
  const [draftCategories, setCategories] = useState(["Character", "Kart", "Wheels", "Glider"])
  
  const [currentDraft, setDraft] = useState(draftCategories[0])
  
  return(
    <div className="draft-wrapper">
      <DraftCounter
        players={props.players}
        draft={currentDraft}
        setDraft={setDraft}
        draftCategories={draftCategories}
      />  
      <div className="draft-body">
        <div className="draft-left">
          <p className="turn-order-header">Turn Order</p>
          <div className="player-list">
            {props.players.map((player, index) => {
              return <DraftPlayer
                      index={index}
                      key={index}
                      player={player}
                    />
            })}
        </div>
      </div>  
        <div className="draft-right">
          {currentDraft === "Character" &&
            <CharacterOptions
              setDraft={setDraft}
              draftCategories={setCategories}
            />  
          }
          {currentDraft === "Kart" &&
            <KartOptions
              setDraft={setDraft}
              draftCategories={setCategories}
            />
          }
          {currentDraft === "Wheels" &&
            <WheelOptions
              setDraft={setDraft}
              draftCategories={setCategories}
            />
          }
          {currentDraft === "Glider" &&
            <GliderOptions
              setDraft={setDraft}
              draftCategories={setCategories}
            />
          }
          {/* <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div> */}
        </div>  
      </div>  
    </div>
  );
};

export default DraftSelect;