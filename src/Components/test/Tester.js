//contains all my calculations
//[{name: "smoothie Nme", calories: 20}]


export const calculateAverageCalories = (smoothie) =>{

    let totalCalories = 0
    for(var i = 0; i < smoothieArray.length; i++) {
        totalCalories += smoothieArray[i].calories
    }

    let average = totalCalories / smoothieArray.length;
    return average.toFixed(2);
}