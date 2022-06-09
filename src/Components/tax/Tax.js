import React, { useState } from "react";
import classes from './Tax.module.css'

const Tax = () => {

    const [calculate, setCalculate] = useState();
    

    // const calculateTax = (e) => {
    //     value = e.target.value;

    //     value*18(setCalculate)
    // } 

    return (
        <>
            <div className={classes.tax}>

                <h1 className={classes.Tex}> Calculate your Income after Tax. </h1>
                <input className={classes.sel} placeholder="Enter Salary Here..." type="number"></input>

                <button className={classes.btn2}> Calculate </button>
            </div>
        </>
    )
}

export default Tax;