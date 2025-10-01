import React, { Component } from "react";
import { Greet } from "./components/Greet";

class App extends Component {
  render() {
    return (
      <div className="App">
				<Greet name="David" messageCount={20} isLoggedIn={false}/>
      </div>
    );
  }
}

export default App;
