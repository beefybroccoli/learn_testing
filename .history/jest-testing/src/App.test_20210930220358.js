import { render, screen } from "@testing-library/react";
import "jest-dom";
import App from "./App";

test("renders a span with the text Hello word", () => {
  //arrange
  const wrapper = render(<App />);
  //act
  console.log(wrapper.debug());
  //assert
});
