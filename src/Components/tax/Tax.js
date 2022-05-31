import React from "react";
import classes from './Tax.module.css'

const Tax = () => {

    const calculateTaxBracket = () => {
        
    } 

    return (
        <>
            <div className={classes.tax}>

                <h1 className={classes.Tex}> Calculate your Tax </h1>
                <input className={classes.sel} placeholder="Enter Salary Here..." type="number"></input>

                <button className={classes.btn2}> Calculate </button>
            </div>
        </>
    )
}

export default Tax;