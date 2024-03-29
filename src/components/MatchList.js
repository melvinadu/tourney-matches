import React from "react";
import Match from "./Match";

function MatchList(props) {
  const { matchData } = props;
 
  {/* without unique "key" prop

  const parsedMatches = matchData.map(match => <Match  {...match} />)
  
  */}

  {/* with unique "key" prop
  */}
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber} {...match} />);



  return (
    <section className="PlayerList MatchList">
      <h1>
        Match list
      </h1>
      {parsedMatches}
    </section>
  );
}

export default MatchList;