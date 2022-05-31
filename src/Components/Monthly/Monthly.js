import React from "react"
import classes from './Monthly.module.css'

const Monthly = () => {
    return(
        <>
            <div className={classes.Month}>
                <h1 className={classes.mon}>Monthly household salary</h1>

                <input className={classes.sal1} placeholder="Enter Salary..." type="number"></input>
                
                
                <h2> placeholder for total </h2>

                <button className={classes.btn}> calculate total </button>
            </div>
        </>
    )
}

export default Monthly;