import React, { useState } from "react";
import { calculateAverageCalories } from "./Tester";

export default function SmoothieCard() {

    const[name, setName] = useState('')
    const[calories, setCalories] = useState('')

    const [smoothies, setSmoothies] = useState([])

    const[average, setAverage] = useState('')

    const addSmoothie = () =>{
        let currentSmoothies = [...smoothies]
        currentSmoothies.push({name, calories})
        setSmoothies(currentSMoothies)



        setName("")
        setCalories("")

        setAverage(calculateAverageCalories(smoothies))
    }

    return(
    <>
    <div>
            <input placeholder="Smoothie Name"
             name='name'
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              type="text" 
              aria-label="name"/>

<input placeholder="Smoothie Calories"
             name='calories'
              onChange={(e) => setCalories(e.target.value)} 
              value={calories} 
              type="number" 
              aria-label="calories"/>

        <input type="submit" name="submit" value="Add" onClick={addSmoothie}/>

        <div>
            {smoothies.map((smoothie, index) =>{
                <div key={index}>
                     <h1>{smoothie.name}</h1>
                    <h2 aria-length={index} >{smoothie.calorie}</h2>
                </div>
                
            })}
            
        </div>

            <h3 aria-label='average'>  </h3>
    </div>

    </>
    )
}