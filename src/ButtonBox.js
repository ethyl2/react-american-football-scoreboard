/*Stretch Goal: Break out parts of this component into smaller components 
and compose multiple components together to make the UI*/

import React from "react";
import "./App.css";

const ButtonBox = (props) => {
    
    /* Stretch Goal: Write a "handler" function in the component that takes 
    in a team name and an amount. This function will then be 
    passed to each button's click handler. It will increment the 
    correct team's score by the passed in amount*/
    
    const scoreHandler = (teamName, amount) => {
        if (teamName === "Lions") {
            props.setHomeScore(currentHomeScore => currentHomeScore + amount);
        } else {
            props.setAwayScore(currentAwayScore => currentAwayScore + amount);
        }
    }

    return (
        <section className="buttons">
        <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter 
        functions to click listeners. */}
        <button className="homeButtons__touchdown" 
            onClick={ () => scoreHandler("Lions", 7)}>
            Home Touchdown</button>
        <button className="homeButtons__fieldGoal" 
            onClick={() => scoreHandler("Lions", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
        <button className="awayButtons__touchdown" 
            onClick={() => scoreHandler("Tigers", 7)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" 
            onClick={() => scoreHandler("Tiger", 3)}>Away Field Goal</button>
        </div>

    <div className="secondRowDisplayButtons">

        <button className="downButton" onClick={() => {
            props.setDownNum(currentDownNum => {
                let newNum = currentDownNum + 1;
                if(newNum > 4) {
                    newNum = newNum %4;
                }
                return newNum;
            })
        }}>Advance Down</button>

        <button className="ballOnButton" onClick={() => {
            props.setBallOnNum(currentBallOn => {
                let newNum = currentBallOn + 1;
                if(newNum> 50) {
                    newNum = newNum %50;
                    }
                return newNum;
            })
            props.setToGoNum(currentToGo => {
                let newNum = currentToGo - 1;
                if (newNum < 0) {
                    newNum = 50;
                }
                return newNum;
            })
        }}>Advance Ball On</button>

    {/* Stretch Goal: Add a button that changes which quarter the game is in, 
    and then render the state quarter value on the scoreboard*/}


        <button className="quarterButton" onClick={() => {
        props.setQuarterNum(currentQuarterNum => {
          let newNum = currentQuarterNum + 1;
          if(newNum> 4) {
            newNum = newNum %4;
            }
          return newNum;
        })}}>Advance to Next Quarter</button>
      
    </div>
    
  </section>
  )
}

export default ButtonBox;