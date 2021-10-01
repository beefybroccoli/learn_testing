import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("render", () => {
  //arrange
  render(<App />);
  //act
  const wrapper = render(<App />);
  //assert
  console.log(wrapper.debug());
});
