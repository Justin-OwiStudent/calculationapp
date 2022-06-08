import React from "react";
import AfterTax from "../AfterTax/AfterTax";
import Expenses from "../Expenses/Expenses";
import Row from "../Row/Row";

import Monthly from "../Monthly/Monthly";
import Savings from "../savings/Savings";
import Tax from "../tax/Tax";
import classes from './Main.module.css'

const Main = () => {
    return (
        <>
        <div className={classes.main}>

            {/* <Monthly></Monthly>
            <Tax></Tax>
            <Expenses></Expenses> */}
            <Savings></Savings>
            <AfterTax></AfterTax>

            <Row></Row>

            <Monthly></Monthly>

            <Tax></Tax>
        </div>
        </>
    )
}

export default Main;