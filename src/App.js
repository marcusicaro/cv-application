import React, { Component } from "react";
import Main from "./components/Main";
import General from "./components/general/General";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Main />
      </div>
    )
  };
}

export default App;
