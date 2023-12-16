import React from "react";
import { useDispatch } from "react-redux";
import { calculateToll } from "../actions/tollActions"; // adjust the path according to your file structure

const TollCalculator = () => {
  const dispatch = useDispatch();

  const handleCalculateClick = () => {
    const route = {
      // your route information
    };

    dispatch(calculateToll(route));
  };

  return <button onClick={handleCalculateClick}>Calculate Toll</button>;
};

export default TollCalculator;
