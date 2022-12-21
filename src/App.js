import React, { Component } from "react";
import Main from "./components/Main";
import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Main />
          {/* <General />
          <Experience />
          <Education /> */}
      </div>
    )
  };
}

export default App;
