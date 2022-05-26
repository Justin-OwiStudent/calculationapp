import React from "react"
import './Monthly.css'

const Monthly = () => {
    return(
        <>
            <div className="Month">
                <h1>Monthly household salary</h1>

                <input className="sal-1"></input>
                <input className="sal-2"></input>
                <input className="sal-3"></input>
                <input className="sal-4"></input>

                <button className="btn"> calculate total </button>
            </div>
        </>
    )
}

export default Monthly;