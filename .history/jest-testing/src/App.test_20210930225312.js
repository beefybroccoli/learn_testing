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
  const element = wrapper.queryByText(/hello world/);
  //assert
  expect(element).toBeInTheDocument();
});
