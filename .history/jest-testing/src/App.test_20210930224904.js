import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  //arrange
  render(<App />);
  //act
  const wrapper = render(<App />);
  //
  console.log(wrapper.debug);
});
