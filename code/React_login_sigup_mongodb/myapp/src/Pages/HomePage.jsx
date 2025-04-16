import React from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  return (
    <div>
      HomePage hello g
      {location.state ? <h1>Hello {location.state.id} welcome </h1> : ""}

      
    </div>
  );
};

export default HomePage;
