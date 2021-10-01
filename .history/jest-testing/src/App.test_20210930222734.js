import { render, screen } from "react-testing-library;
import "jest-dom/extend-expect";
// import "react-testing-library/jest-dom";
import App from "./App";

test("renders a span with the text Hello word", () => {
  //arrange
  const wrapper = render(<App />);
  //act
  console.log(wrapper.debug());
  //assert
});
