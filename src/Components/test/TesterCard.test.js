// import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
// import SmoothieCard from "./TesterCard"

// describe ("Test tester card", () => {

//     test("Test if inputs of form is empty", () => {
//         render(<SmoothieCard />)

//         const nameInput = screen.getByLabelText(/name/i)
//         const caloriesInput = screen.getByLabelText(/calories/i)

//         expect(nameInput.value).toBe("")
//         expect(caloriesInput.value).toBe("")

//     })

//     test("test if inputs update correctly and if button click works", () => {
//         render(<SmoothieCard />)

//         const nameInput = screen.getByLabelText(/name/i)
//         const caloriesInput = screen.getByLabelText(/calories/i)

//         userEvent.type(nameInput, "Mango Django")
//         userEvent.type(caloriesInput, "20")


//         expect(nameInput.value).toBe("Mango Django")
//         expect(caloriesInput.value).toBe("20")

//         //are the values updated correct
//         const addButton = screen.getByRole("button")
//         userEvent.click(addButton)

//         //are the values added to the array
//         const nameOutput = screen.getAllByText(/Mango Django/i)
//         const caloriesOutput = screen.getAllByText(/20/i)

//         expect(nameOutput).toBeInTheDocument()
//         expect(caloriesOutput).toBeInTheDocument()
//         //END: are the values added correctly



//             //REPEAT

//         userEvent.type(nameInput, "Peanut butter & Banana")
//         userEvent.type(caloriesInput, "30")


//         expect(nameInput.value).toBe("Mango Django")
//         expect(caloriesInput.value).toBe("20")

//         //are the values updated correct
//         userEvent.click(addButton)

//         //are the values added to the array
//         const secondNameOutput = screen.getAllByText(/Peanut butter & Banana/i)
//         const secondCaloriesOutput = screen.getAllByText(/30/i)

//         expect(nameOutput).toBeInTheDocument()
//         expect(caloriesOutput).toBeInTheDocument()
//         expect(secondNameOutput).toBeInTheDocument()
//         expect(secondCaloriesOutput).toBeInTheDocument()
//     })


//     test("test if average calory calculation is executed", () => {
//         render(<SmoothieCard />)

//         const nameInput = screen.getByLabelText(/name/i)
//         const caloriesInput = screen.getByLabelText(/calories/i)

//         userEvent.type(nameInput, "Mango Django")
//         userEvent.type(caloriesInput, "20")


//         expect(nameInput.value).toBe("Mango Django")
//         expect(caloriesInput.value).toBe("20")

//         //are the values updated correct
//         const addButton = screen.getByRole("button")
//         userEvent.click(addButton)

//         //are the values added to the array
//         const nameOutput = screen.getAllByText(/Mango Django/i)
//         const caloriesOutput = screen.getAllByText(/20/i)

//         expect(nameOutput).toBeInTheDocument()
//         expect(caloriesOutput).toBeInTheDocument()
//         //END: are the values added correctly



//             //REPEAT

//         userEvent.type(nameInput, "Peanut butter & Banana")
//         userEvent.type(caloriesInput, "30")


//         expect(nameInput.value).toBe("Peanut butter & Banana")
//         expect(caloriesInput.value).toBe("30")

//         //are the values updated correct
//         userEvent.click(addButton)

//         //are the values added to the array
//         const secondNameOutput = screen.getAllByText(/Peanut butter & Banana/i)
//         const secondCaloriesOutput = screen.getAllByText(/30/i)

//         expect(nameOutput).toBeInTheDocument()
//         expect(caloriesOutput).toBeInTheDocument()
//         expect(secondNameOutput).toBeInTheDocument()
//         expect(secondCaloriesOutput).toBeInTheDocument()

//         //THE THING WE ARE ACTUALLY TESTING

//         const outputOfAverageCalories = screen.getByLabelText(/average/i)

//         expect(outputOfAverageCalories.innerText).toBe("Average Calories: 25")
//     })


// })


// take 2 inputfeilds and add that to an array,, array cam then be the amount of expenses, list and prices