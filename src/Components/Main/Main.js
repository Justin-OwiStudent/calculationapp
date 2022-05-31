import React from "react";
import Monthly from "../Monthly/Monthly";
import Tax from "../tax/Tax";
import classes from './Main.module.css'

const Main = () => {
    return (
        <>
        <div className={classes.main}>

            <Monthly></Monthly>
            <Tax></Tax>
        </div>
        </>
    )
}

export default Main;