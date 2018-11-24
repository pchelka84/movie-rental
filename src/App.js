import React, { Component } from "react";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main role="main" className="container">
          <Movies />
        </main>
      </div>
    );
  }
}

export default App;
