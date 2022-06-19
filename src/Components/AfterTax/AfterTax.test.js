import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AfterTax from "./AfterTax";


describe('Testing monthly expenses', () => {

   test("input Should be empty", () => {
       render(<AfterTax/>)
       const inputElement = screen.getAllByRole("textbox")
       expect(inputElement[0].value).toBe("")
     
   })
   
   test("Name of Item Entered...", () => {
    render(<AfterTax/>)
    const inputElement = screen.getByTestId("itemName")

    userEvent.type(inputElement,"awe")

    expect(inputElement.value).toBe("awe")
})


test("Test if price is being entered...", () => {
    render(<AfterTax/>)
    const inputElement = screen.getByTestId("price")
    
    userEvent.type(inputElement,"123")

   
    expect(inputElement.value).toEqual('123')
  
})

test("Check if our button works...", () => {
    render(<AfterTax/>);

    const calculationButton = screen.getByTestId("button");

    userEvent.click(calculationButton);

    
  });



});
