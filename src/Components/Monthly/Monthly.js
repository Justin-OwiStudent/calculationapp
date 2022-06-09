import React from "react"
import classes from './Monthly.module.css'

const Monthly = () => {

   

    return(
        <>
            <div className={classes.Month}>
                <h1 className={classes.mon}>Monthly household salary.</h1>

                <input className={classes.sal1} placeholder="Enter Salary..." type="number"></input>
                
                
                <h2> R0000000 </h2>

                <button className={classes.btn}> Calculate Total </button>
            </div>
        </>
    )
}

export default Monthly;