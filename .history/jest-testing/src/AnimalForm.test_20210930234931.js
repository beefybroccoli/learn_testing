import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("render", () => {
  //arrange
  render(<AnimalForm />);
  //act
  const wrapper = render(<App />);
  //assert
  console.log(wrapper.debug());
});
