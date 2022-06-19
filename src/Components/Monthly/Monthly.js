import React from "react"
import classes from './Monthly.module.css'

const Monthly = () => {

const totalArray = [];

let EnteredSalary 


   const calculateTotal = () => {
    // take the one onsubmit and add it to the array        
   }

    return(
        <>
            <div className={classes.Month}>
                <h1 className={classes.mon}>Monthly household salary.</h1>

                <input className={classes.sal1} placeholder="Enter Salary..." type="number" data-testid="monthSal"></input>
                
                {/* make an arrray and add the new entered salary into that array and display it on the H2 tag */}

                <h2> R0000000 </h2>

                <button className={classes.btn}> Calculate Total </button>
            </div>
        </>
    )
}

export default Monthly;