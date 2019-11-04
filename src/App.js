//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some 
  // useState hooks.  You'll need one for the home score and 
  // another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarterNum, setQuarterNum] = useState(1);
  const [ballOnNum, setBallOnNum] = useState(21);
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded 
            values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarterNum = {quarterNum} ballOnNum = {ballOnNum}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter 
          functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {
            setHomeScore(currentHomeScore => currentHomeScore + 7)
          }}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {
            setHomeScore(currentHomeScore => currentHomeScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {
            setAwayScore(currentAwayScore => currentAwayScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {
            setAwayScore(currentAwayScore => currentAwayScore + 3)}}>Away Field Goal</button>
        </div>
        <div className="secondRowDisplayButtons">
          <button className="quarterButton" onClick={() => {
            setQuarterNum(currentQuarterNum => {
              let newNum = currentQuarterNum + 1;
              if(newNum> 4) {
                newNum = newNum %4;
              }
              return newNum;
          })}}>Advance to Next Quarter</button>
          <button className="ballOnButton" onClick={() => {
            setBallOnNum(currentBallOn => {
              let newNum = currentBallOn + 1;
              if(newNum> 53) {
                newNum = newNum %53;
              }
              return newNum;
          })}}>Advance Ball On</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
