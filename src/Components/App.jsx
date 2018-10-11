//React allows use of 2015 modules and there use import statements
//common js modules are in node JS on teh back end and use require statements
import React, { Component } from "react";
import "./App.css"

import AllPeopleList from "./AllPeople/AllPeople";

class App extends Component {
  render() {
    return (
      <div className="overlay">
            <AllPeopleList/>
      </div>
    );
  }
}
export default App;
