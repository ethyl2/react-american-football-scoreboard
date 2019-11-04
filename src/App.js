//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import BottomRow from "./BottomRow";
import ButtonBox from "./ButtonBox";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some 
  // useState hooks.  You'll need one for the home score and 
  // another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [downNum, setDownNum] = useState(1);
  const [toGoNum, setToGoNum] = useState(49);
  const [ballOnNum, setBallOnNum] = useState(1);
  const [quarterNum, setQuarterNum] = useState(1);
  
  

  return (
    <div className="container">
      <Header />
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lord Licorice</h2>

            {/* TODO STEP 3 - We need to change the hardcoded 
            values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Queen Frostine</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow downNum={downNum}
          toGoNum={toGoNum} 
          ballOnNum = {ballOnNum} 
          quarterNum = {quarterNum}
         />
      </section>
      
      <ButtonBox setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
        setDownNum={setDownNum}
        setToGoNum={setToGoNum}
        setBallOnNum={setBallOnNum}
        setQuarterNum={setQuarterNum}
      />
    </div>
  );
}

export default App;
