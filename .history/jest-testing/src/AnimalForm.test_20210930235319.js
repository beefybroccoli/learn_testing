import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("render", () => {
  //arrange
  render(<AnimalForm />);
  //act
  const wrapper = render(<AnimalForm />);
  //assert
  console.log(wrapper.debug());
});

test("displays species when submitting all fields", async () => {
    //Arrange: render our component
    render(<AnimalForm />);
    const species = "canine";

    //Act: Submit our form
    //1. Give species input focus.
    // const speciesInput = screen.getByPlaceholderText("species");
    const speciesInput = screen.getByLabelText(/species:/i);
    
    //2. Type in species.
    userEvent.type(speciesInput, species);

    //3. Give the age focus
    const ageInput = screen.getByLabelText(/age:/i);
    //4. Type in age.
    userEvent.type(ageInput, "12");

    //5. Give the notes focus
    const noteInput = screen.getByLabelText(/notes:/i);
    //6. Type in notes.
    userEvent.type(noteInput, "this cutest");

    //7. click our submit button
    const button = screen.getByRole("button");
    userEvent.click(button);


    const speciesFeedback = screen.queryByText(species);
    expect(speciesFeedback).toBeInTheDocument();
}
