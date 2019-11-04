/*Stretch Goal: Break out parts of this component into smaller components 
and compose multiple components together to make the UI*/

import React from "react";
import "./App.css";

const ButtonBox = (props) => {
  
  return (
    <section className="buttons">
    <div className="homeButtons">
      {/* TODO STEP 4 - Now we need to attach our state setter 
      functions to click listeners. */}
      <button className="homeButtons__touchdown" onClick={() => {
        props.setHomeScore(currentHomeScore => currentHomeScore + 7)
      }}>Home Touchdown</button>
      <button className="homeButtons__fieldGoal" onClick={() => {
        props.setHomeScore(currentHomeScore => currentHomeScore + 3)}}>Home Field Goal</button>
    </div>
    <div className="awayButtons">
      <button className="awayButtons__touchdown" onClick={() => {
        props.setAwayScore(currentAwayScore => currentAwayScore + 7)}}>Away Touchdown</button>
      <button className="awayButtons__fieldGoal" onClick={() => {
        props.setAwayScore(currentAwayScore => currentAwayScore + 3)}}>Away Field Goal</button>
    </div>

    /* Stretch Goal: Add a button that changes which quarter the game is in, 
    and then render the state quarter value on the scoreboard*/

    <div className="secondRowDisplayButtons">
      <button className="quarterButton" onClick={() => {
        props.setQuarterNum(currentQuarterNum => {
          let newNum = currentQuarterNum + 1;
          if(newNum> 4) {
            newNum = newNum %4;
          }
          return newNum;
      })}}>Advance to Next Quarter</button>
      <button className="ballOnButton" onClick={() => {
        props.setBallOnNum(currentBallOn => {
          let newNum = currentBallOn + 1;
          if(newNum> 53) {
            newNum = newNum %53;
          }
          return newNum;
      })}}>Advance Ball On</button>
    </div>
    
  </section>
  )
}

export default ButtonBox;