import React, { useState } from "react"
import classes from './Monthly.module.css'

const Monthly = () => {

    const [household, SetHousehold] = useState();

    const [total, setTotal] = useState();

    const [array, setArray] = useState([]);

    const [summary, setSummary] = useState([]);

    
    // setDatas(prevState=>[{name, price},...prevState])

   const calculateHandler = () => {
    
    setArray(prevState=>[household,...prevState]);
    console.log(array)
    
    setTotal(household)

   }

    return(
        <>
            <div className={classes.Month}>
                <h1 className={classes.mon}>Monthly household salary.</h1>

                <input className={classes.sal1} placeholder="Enter Salary..." type="number" data-testid="monthSal" onChange={(e) => SetHousehold(e.target.value)}/>
                
                {/* make an arrray and add the new entered salary into that array and display it on the H2 tag */}

                <h2> R: {total} </h2>

                <button className={classes.btn} onClick={calculateHandler} data-testid="button"> Calculate Total </button>
            </div>
        </>
    )
}

export default Monthly;