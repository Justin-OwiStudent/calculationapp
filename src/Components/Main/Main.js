import React from "react";
import Monthly from "../Monthly/Monthly";
import Savings from "../savings/Savings";
import Tax from "../tax/Tax";
import classes from './Main.module.css'

const Main = () => {
    return (
        <>
        <div className={classes.main}>

            <Monthly></Monthly>
            <Tax></Tax>
            <Savings></Savings>
        </div>
        </>
    )
}

export default Main;