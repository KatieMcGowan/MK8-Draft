const DraftHeader = (props) => {
  return(
    <div className="draft-header">
      <p className="category-selection">{props.currentDraft} Selection: {props.count} seconds</p>
      <p className="player-turn">{props.playerUp.player}'s Turn</p>
    </div>
  );
};

export default DraftHeader;