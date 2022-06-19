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

// console.log(tax)

//   const calculateTax = (e) => {

//     total: '$' + (Number(this.state.value) * 1.0725).toFixed(2)
//   };

// const getBracket = (amt) => {

//   amt = amt * 12;

//   const brackArr = [
//     { amount: 226000, pcr: 0.18, amnt: 0 },
//     { amount: 353100, pcr: 0.26, amnt: 40680 },
//     { amount: 488700, pcr: 0.31, amnt: 73726 },
//     { amount: 641400, pcr: 0.36, amnt: 115762 },
//     { amount: 817600, pcr: 0.39, amnt: 170734 },
//     { amount: 1731600, pcr: 0.41, amnt: 239452 },
//     { amount: Infinity, pcr: 0.45, amnt: 614192 },
//   ];

//   let counter = 0;
  
//   while (amt >= brackArr[counter].amount) {
//     counter++;
//   }

//   let totalTaxToPay = amt * brackArr[counter].pcr + brackArr[counter].amnt;
//   setTotal(totalTaxToPay.toFixed(2));

// };
 

    const calculationHandler = () => {
      if(tax >= 1){
        setTaxOutput(tax * 0.18);
        console.log("first")
      }else if(tax >= 226000){
        setTaxOutput(tax * 0.18);
        
      } else if (tax >= 353100){
        setTaxOutput(tax * 0.26);
        
      } else if (tax >= 488700){
        setTaxOutput(tax * 0.31);
        
      } else if (tax >= 641400){
        setTaxOutput(tax * 0.36);
        
      } else if (tax >= 817600){
        setTaxOutput(tax * 0.39);
        
      } else if (tax >= 1731600){
        setTaxOutput(tax * 0.41);
        
      }

      // let calc = (tax * 0.18);
      // console.log(calc)

      // setTaxOutput(calc)
    }

// amount x 12

  return (
    <>
      <div className={classes.tax}>
        <h1 className={classes.Tex}>Calculate your Tax Payable.</h1>
        <input
          className={classes.amt}
          placeholder="Enter Salary Here..."
          type="number"
          data-testid="taxi"
          onChange={(e) => setTax(e.target.value)}
        />

        <button className={classes.btn2} onClick={calculationHandler} data-testid="button"> Calculate </button>

        <div className={classes.show}> R: {taxOutput} </div>
      </div>
    </>
  );
};

export default Tax;
