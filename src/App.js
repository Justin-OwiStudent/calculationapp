import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/Nav/Nav";
import Monthly from "./Components/Monthly/Monthly";
import Tax from "./Components/tax/Tax";

function App() {
  return (
    <div className="App">
     
    <Nav></Nav>
    <Monthly></Monthly>
    <Tax></Tax>


    </div>
  );
}

export default App;
