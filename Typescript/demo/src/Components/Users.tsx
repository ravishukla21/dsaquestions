import React from "react";
interface IPROPS {
  userid: number;
}

class Users extends React.Component<IPROPS> {
  constructor(props: IPROPS) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>welcome to class components {this.props.userid}</h1>
      </>
    );
  }
}

export default Users;
