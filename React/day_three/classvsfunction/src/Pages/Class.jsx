import React, { Component } from "react";
import Nav from "./Nav";

class Class extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("called lifecycle mount");
  }

  render() {
    //used tornder html
    console.log("render");

    return (
      <div>
        <h1>hello world from class</h1>
        {this.state.show ? <Nav /> : <h1>hello world</h1>}

        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          togglenav
        </button>
      </div>
    );
  }
}
export default Class;
