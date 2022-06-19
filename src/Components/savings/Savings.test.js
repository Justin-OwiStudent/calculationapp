import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Savings from "./Savings"

describe('Testing Salary entry', () => {

  // const typeInput = ({ inputOne, inputTwo }) => {
  //   const inputNumberOneElement = screen.getByTestId("Salary");
  //   const inputNumberTwoElement = screen.getByTestId("perc");

  //   if (inputOne) {
  //     userEvent.type(inputNumberOneElement, inputOne);
  //   }
  //   if (inputTwo) {
  //     userEvent.type(inputNumberTwoElement, inputTwo);
  //   }
    
  // };

   test("input Should be empty", () => {
       render(<Savings/>)
       const inputElement = screen.getAllByRole("textbox")
       expect(inputElement[0].value).toBe("")
 
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

    test("Check if our button works...", () => {
      render(<Savings/>);
  
      const calculationButton = screen.getByTestId("button");
  
      userEvent.click(calculationButton);
    });
    

    // test("is the Button being clicked...", () => {
    //   render(<Savings/>)
    //   const inputElement = screen.getByRole("btn")
  
    //   userEvent.click("clicked")
  
    //   expect("btn").toBe("clicked")
    //   })


  
  



      // test("is the Button being clicked...", () => {
      //   render(<Savings />);
    
      //   //act
      //   // const calculationButton = screen.getAllByRole("button");
    
      //   // userEvent.click(calculationButton);
    
      //   userEvent.click(screen.getByRole('button'))
      //   expect(screen.getByRole('button')).toBeEnabled()

      // });
});
