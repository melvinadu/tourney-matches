import React from "react";


function Match(props) {
  const { players, winner, scoreDifference } = props;
  
  return (
    <article className="Match">
      <h1>
        {players[0]} <span>vs</span> {players[1]}
      </h1>

      {/* if else statement written in ternary operator to be shown when there is winner or not*/}

      {{winner} ? <h2>{winner} is the winner by {scoreDifference}!</h2> : <h2>No winners yet!</h2>}
    </article>
  );
}

export default Match;

