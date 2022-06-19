import React, { useState } from "react";
import classes from "./Savings.module.css";

const Savings = () => {

  const [tax, setTax] = useState("");

  const BracketArray = [
    {"bracket1" : "226,000"},
    {"bracket2" : "353,100"},
    {"bracket3" : "488,700"},
    {"bracket4" : "641,400"},
    {"bracket5" : "817,600"},
    {"bracket6" : "1,731,600"},
   
  ];


for (let i = 0; i < BracketArray.length; i++) {
  if(tax <= "100,000"){

  } 

  else if (tax == "353,100"){
    console.log("working2")
  }

  else if (tax == "488,700"){
    console.log("working3")
  }

  else if (tax == "641,400"){
    console.log("working4")
  }

  else if (tax == "817,600"){
    console.log("working5")
  }

  else if (tax == "1,731,600"){
    console.log("working6")
  }
  
  
}

//  const [Salary, setSalary] = useState([]);

//  const SalaryHanlder = () => {
//   var percentage = Math. round(((currentValue / goalValue) * 100)) +"%"
//  }


// if (1-20)
// map this to to div 4

  return (
    <>
      <div className={classes.save}>

        <div className={classes.sal}>
          <h3> Enter your Salary.</h3>
          <input name="number-1" type="text"
            placeholder="Enter salary here..."
            className={classes.sali}
            data-testid="Salary"
            onChange={(e) => setTax(e.target.value)}
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
          <button className={classes.btn} data-testid="button">Save</button>
        </div>

      </div>
    </>
  );
};

export default Savings;
