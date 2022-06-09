import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Savings from "./Savings"

describe('Testing Salary entry', () => {

    // beforeEach(() => {
    //     render(<Savings />);
    //   });

    const typeInput = ({ inputOne }) => {
        const inputNumberOneElement = screen.getByLabelText(/NumberOne/i);
        if (inputOne) {
          userEvent.type(inputNumberOneElement, inputOne);
        return {
          inputNumberOneElement,
        };
      };
    };

    // test("make sure that the inputs are empty when rendered", () => {
    //     const { inputNumberOneElement } = typeInput({});
    
    //     expect(inputNumberOneElement.value).toBe("");
        
    //   });

   test("input Should be empty", () => {
       render(<Savings/>)
       const inputElement = screen.getAllByRole("textbox")
       expect(inputElement[0].value).toBe("")
    //    inputElement.map(input => ({
    //        expect(input).toBe("")
    //    }))
   })
   
   test("salary is Entered...", () => {
       render(<Savings/>)
       const inputElement = screen.getByTestId("Salary")

       userEvent.type(inputElement,"2")

       expect(inputElement.value).toBe("2")
   })


   test("Percentage wanting to save entered...", () => {
    render(<Savings/>)
    const inputElement = screen.getByTestId("perc")

    userEvent.type(inputElement,"2")

    expect(inputElement.value).toBe("2")
    })

});
