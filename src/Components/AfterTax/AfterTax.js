import classes from "./AfterTax.module.css";

const AfterTax = () => {
    return(
        <>
            <div className={classes.big}>
                <h3>Monthly Expenses</h3>
            <input className={classes.inp1} placeholder='name of item'></input>
            <input className={classes.inp2} placeholder='price of item'></input>

            <div className={classes.list}></div>

            </div>

            <div className={classes.big2}>
                <h3>Tax Brackets</h3>
                <div className={classes.bracket1}> <p>bracket 1</p> </div>
                <div className={classes.bracket2}><p>bracket 1</p></div>
                <div className={classes.bracket3}><p>bracket 1</p></div>
                <div className={classes.bracket4}><p>bracket 1</p></div>
                <div className={classes.bracket5}><p>bracket 1</p></div>

                {/* <input className={classes.inp1}></input> */}
            </div>
        </>
    )
}

export default AfterTax;