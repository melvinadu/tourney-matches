import React from "react";

function Player(props) {
  const {firstName, lastName, gamerTag, wins} = props;

  return (
    <article className="Player">
      
      <h1>
        {firstName} <span>{gamerTag}</span> {lastName}
      </h1>
      
      {/* if else statement written with short-circuitted ternary operator to be shown based on number of wins */}
      {wins === 0 && <h2 className="zero">Currently with no wins</h2>}
      {wins === 1 && <h2>Currently with {wins} wins</h2>}
      {wins > 1 && <h2>Currently at {wins}+ wins</h2>}

    </article>
  );
}

export default Player;