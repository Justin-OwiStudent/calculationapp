import React from "react";
import './Tax.css'

const Tax = () => {

    const calculateTaxBracket = () => {
        
    } 

    return (
        <>
            <div className="tax">
                <select className="sel">
                <option value="" disabled selected hidden>Choose tax bracket...</option>
                    <option>1-2</option>
                    <option>2-3</option>
                    <option>3-4</option>
                    <option>4-5</option>
                </select>

                <button className="btn2"> Calculate </button>
            </div>
        </>
    )
}

export default Tax;