import classes from "./AfterTax.module.css";

const AfterTax = () => {
    return(
        <>
            <div className={classes.big}>
                <h1>Monthly Expenses</h1>
            <input className={classes.inp1} placeholder='Name Of Item' data-testid="itemName"></input>
            <input className={classes.inp2} placeholder='Price Of Item' data-testid="price"></input>
                <button className={classes.bttn}>Add Item</button>
            <div className={classes.list}></div>

            </div>

            <div className={classes.big2}>
                <h3>Tax Brackets</h3>
                <div className={classes.bracket1}><p className={classes.pep}>R0 - R226,000</p> </div>
                <div className={classes.bracket2}><p className={classes.pep}>R226,001 - R353,100</p></div>
                <div className={classes.bracket3}><p className={classes.pep}>R353,101 - R488,700</p></div>
                <div className={classes.bracket4}><p className={classes.pep}>R488,701 - R641,400</p></div>
                <div className={classes.bracket5}><p className={classes.pep}>R641,401 - R817,600</p></div>
                <div className={classes.bracket6}><p className={classes.pep}>R817,601 - R7,731,600</p></div>
                <div className={classes.bracket7}><p className={classes.pep}>R1,731,601 & above</p></div>
                

                {/* <input className={classes.inp1}></input> */}
            </div>
        </>
    )
}

export default AfterTax;