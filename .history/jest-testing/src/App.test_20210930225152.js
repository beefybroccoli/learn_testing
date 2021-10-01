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

test("search text", ()=>{

  const wrapper = render(<App/>);

  
})
