import React from "react";
interface IPROPS {
  name: String;
  title: String;
  age?: number;
}
const Customer: React.FC<IPROPS> = ({ name, title, age }) => {
  return (
    <div>
      CUSTOMER COMPONENT {name} {title} {age}
    </div>
  );
};

export default Customer;

// ? represent number
