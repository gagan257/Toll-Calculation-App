import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import TollCalculator from "../components/TollCalculator";

test("calculates toll correctly", () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <TollCalculator />
    </Provider>
  );

  fireEvent.change(getByLabelText(/distance/i), { target: { value: "100" } });
  fireEvent.click(getByText(/calculate toll/i));

  expect(getByText(/the toll is:/i)).toHaveTextContent("The toll is: 5");
});
