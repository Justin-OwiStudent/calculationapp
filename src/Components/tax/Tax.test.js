import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Tax from "./Tax";


describe('Testing monthly expenses', () => {

   test("input Should be empty", () => {
       render(<Tax/>)
       const inputElement = screen.getByTestId("taxi")
       expect(inputElement.value).toBe("")
   })
   

   test("salary is Entered...", () => {
    render(<Tax/>)
    const inputElement = screen.getByTestId("taxi")

    userEvent.type(inputElement,"2")

    expect(inputElement.value).toBe("2")
})


test("Check if our button works...", () => {
    render(<Tax />);

    const calculationButton = screen.getByTestId("button");

    userEvent.click(calculationButton);

    
  });

    // test("is the button being clicked...", () => {
    //     render(<Monthly/>)
    //     const inputElement = screen.getAllByRole("button")
    //    expect(inputElement.value).toBe("clicked")
    // })

  

});
