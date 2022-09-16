import "./DraftSelect.css"

const DraftSelect = () => {
  return(
    <div className="draft-wrapper">
      <div className="draft-header">
        <p className="category-selection">Character Selection: 30 seconds</p>
        <p className="player-turn">Becky's Turn</p>
      </div>
      <div className="draft-body">
        <div className="draft-left">
          <p className="turn-order-header">Turn Order</p>
          <div className="player-list">
            <ol>
              <li>Becky
                <ul>
                  <li>Character: Yoshi</li>
                  <li>Kart: Biddybuggy</li>
                  <li>Wheels: Azure rollers</li>
                  <li>Glider: Flower glider</li>
                </ul>
              </li>
              <li>Elizabeth
                <ul>
                  <li>Character: Yoshi</li>
                  <li>Kart: Biddybuggy</li>
                  <li>Wheels: Azure rollers</li>
                  <li>Glider: Flower glider</li>
                </ul>
              </li>
              <li>Nicholas
                <ul>
                  <li>Character: Yoshi</li>
                  <li>Kart: Biddybuggy</li>
                  <li>Wheels: Azure rollers</li>
                  <li>Glider: Flower glider</li>
                </ul>
              </li>
              <li>Jimmy
                <ul>
                  <li>Character: Yoshi</li>
                  <li>Kart: Biddybuggy</li>
                  <li>Wheels: Azure rollers</li>
                  <li>Glider: Flower glider</li>
                </ul>
              </li>
            </ol>
          </div>  
        </div>
        <div className="draft-right">
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
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>  
      </div>  
    </div>
  );
};

export default DraftSelect;