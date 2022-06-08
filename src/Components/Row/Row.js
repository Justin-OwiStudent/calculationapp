import classes from './Row.module.css'

const Row = () => {
    return (
        <>
            <div className={classes.row}>

                <div className={classes.item1}>
                    <h3>savings amount</h3>
                </div>

                <div className={classes.item2}></div>

                <div className={classes.item3}></div>

                <div className={classes.item4}>
                    <h3>Your Tax Bracket</h3>
                    <div className={classes.brack}></div>
                </div>



            </div>
        </>
    )
}

export default Row;