import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  //arrange
  render(<App />);
  //act
  const wrapper = render(<App />);
  //assert
  console.log(wrapper.debug());
});

test("search text", () => {
  //arrange
  const wrapper = render(<App />);
  //act
  const element = wrapper.queryByText(/hello world/i);
  //assert
  expect(element).toBeInTheDocument();
  expect(element).toBeTruthy();
  expect(element).toBeVisible();
});

test("mounts to a kind of simulated DOM", () => {
  //simulate a component mount
  //arrange
  const simulatedDOM = render(<App />);
  //assert
  const h1 = simulatedDOM.queryByText(/lambda/i);
  console.log(simulatedDOM.debug());
});
