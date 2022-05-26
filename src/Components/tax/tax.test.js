import { render } from "@testing-library/react";
import Tax from './Tax'

describe("Testing tax bracket component", () => {

  beforeEach(() => {
    render(<Tax />);
  });

    // test("Rendering Component", () => {
  
    //   //Arrange (rendering)
    //   render(<Tax />);
  
    //   // act (getting element and touching it)
    //   const inputElement = screen.getAllByRole(""); //all means array type // no all means one 
  
    //   //assert  (test)
    //   inputElement.map((element) => expect(element.value).toBe(""))
  
    // });
  
  

    // test("are we selecting an option...", () => {
      
    //   render(<Tax />);
      
    //   const inputElement = screen.getAllByRole("option");

    //   expect(element.value).toBe("clicked")
      
    // });
  
    

    test("are we clicking a button", () => {
      
      render(<Tax />);
      
      const inputElement = screen.getAllByRole("button");

      inputElement.map((element) => expect(element.value).toBe(""));
      
    });
  
  });