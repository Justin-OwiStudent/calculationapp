import React from "react";
import classes from "./Savings.module.css";

const Savings = () => {
  return (
    <>
      <div className={classes.save}>

        <div className={classes.sal}>
          <h3> Enter your Salary.</h3>
          <input name="number-1" type="text"
            placeholder="Enter salary here..."
            className={classes.sali}
            data-testid="Salary"
          />
        </div>

        <div className={classes.saves}>
          <h3>savings</h3>
          <input
            className={classes.amount}
            placeholder="Enter Amount..."
            
          ></input>
          <input
            className={classes.perc}
            placeholder="% you want to save..."
            data-testid="perc"
          ></input>
          <button className={classes.btn} role="button">Save</button>
        </div>

      </div>
    </>
  );
};

export default Savings;
