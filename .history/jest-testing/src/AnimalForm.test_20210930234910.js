import { render, screen } from "@testing-library/react";
import AAni from "./App";

test("render", () => {
    //arrange
    render(<App />);
    //act
    const wrapper = render(<App />);
    //assert
    console.log(wrapper.debug());
  });