import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";
import userEvent from "@testing-library/user-event";

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
  userEvent.type(speciesInput, "unknown");

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

  const speciesFeedback = screen.queryByText("unknown");
  expect(speciesFeedback).toBeInTheDocument();
});

test("Assert: Check to see if species name appears", () => {
  // // Promise Way
  // const speciesPromise = screen.findByText(species);
  // speciesPromise.then((speciesFeedback) => {
  //   expect(speciesFeedback).toBeInTheDocument();
  // });
  // // Async Way
  // const speciesFeedback = await screen.findByText(species);
  // expect(speciesFeedback).toBeInTheDocument();
  // // Await Way
  // await waitFor(() => {
  //   const speciesFeedback = screen.queryByText(species);
  //   expect(speciesFeedback).toBeInTheDocument();
  // });
});

/*

async function block() {


  const block_a = await ( () => {
      .....
  }) 



  const block_b = ( () =>{
    .....
  })

  console.log(1+1)
}

conast block_a = () => {}
block_a.then( ()=>{(block_b)} )

*/

/*
ref : https://javascript.info/async-await

async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();

*/

/*

ref - https://stackoverflow.com/questions/41292316/how-do-i-await-multiple-promises-in-parallel-without-fail-fast-behavior

async function foo() {
    await new Promise((r)=>setTimeout(r,1000))
    console.log('foo completed')
    return 'foo result'
}

async function bar() {
    await new Promise((r)=>setTimeout(r,1000))
    console.log('bar completed')
    return 'bar result'
}

async function bam() {
    try {
        await new Promise((_,reject)=>setTimeout(reject,2000))
    } catch {
        console.log('bam errored')
        throw 'bam'
    }
}

function handleRejection(p) {
    return p.catch((error)=>({
        error
    }))
}

function waitForAll(...ps) {
    console.log('started...')
    return Promise.all(ps.map(handleRejection))
}

waitForAll(foo(), bar(), bam()).then(results=>console.log('done', results)



*/
