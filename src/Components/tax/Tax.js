import React, { useState } from "react";
import classes from "./Tax.module.css";

const Tax = () => {
  const [calculate, setCalculate] = useState();

  const [tax, setTax] = useState("");
  const [taxOutput, setTaxOutput] = useState("");
  const [total, setTotal] = useState("");

//   const calculateTax = (e) => {
//       let  = e.target.value;

//      console.log(amount)
//   }

//   const calculateTax = () => {
//    (e.target.value(* 18%))
//   }

console.log(tax)

//   const calculateTax = (e) => {

//     total: '$' + (Number(this.state.value) * 1.0725).toFixed(2)
//   };



  return (
    <>
      <div className={classes.tax}>
        <h1 className={classes.Tex}>Calculate your Income after Tax.</h1>
        <input
          className={classes.sel}
          placeholder="Enter Salary Here..."
          type="number"
          data-testid="taxi"
          onChange={(e) => setTax(e.target.value)}
        ></input>

        <button className={classes.btn2}> Calculate </button>
      </div>
    </>
  );
};

export default Tax;
