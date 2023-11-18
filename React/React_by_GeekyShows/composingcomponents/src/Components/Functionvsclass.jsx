import React, { Component } from "react";

// const Functionvsclass = (props) => {
//   console.log(props, "props");
//   return (
//     <div>
//       hello {props.name} {props.age + 5}
//       {"   "}
//       {props.arr[1]}
//     </div>
//   );
// };

class Functionvsclass extends Component {
  constructor(props) {
    super(props);
    this.abc = 56;
    console.log(JSON.stringify(this) + "this");
  }
  // console.log((this) + "this123");

  render() {
    return (
      <div>
        <h1>
          hello {this.props.name} {this.props.age + 5}
          {this.abc}
        </h1>
      </div>
    );
  }
}

export default Functionvsclass;
//previously classs components are used
//becauseof lifecycle hook,state
//
