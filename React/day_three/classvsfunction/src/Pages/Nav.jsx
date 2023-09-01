import React, { Component } from "react";

export default class Nav extends Component {
  componentWillUnmount() {
    console.log("unmountinnavbar");
  }
  componentDidMount() {
    console.log("mountphaseinnavbar");
  }
  render() {
    return <h1>nav bar</h1>;
  }
}
