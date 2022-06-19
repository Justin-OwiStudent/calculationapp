import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Monthly from "./Monthly";


describe('Testing monthly expenses', () => {

   test("input Should be empty", () => {
       render(<Monthly/>)
       const inputElement = screen.getByTestId("monthSal")
       expect(inputElement.value).toBe("")
   })
   

   test("salary is Entered...", () => {
    render(<Monthly/>)
    const inputElement = screen.getByTestId("monthSal")

    userEvent.type(inputElement,"2")

    expect(inputElement.value).toBe("2")
})


    // test("is the button being clicked...", () => {
    //     render(<Monthly/>)
    //     const inputElement = screen.getAllByRole("button")
    //    expect(inputElement.value).toBe("clicked")
    // })

  

});
