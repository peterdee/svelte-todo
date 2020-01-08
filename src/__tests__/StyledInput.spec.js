import { render } from "@testing-library/svelte";

import StyledInput from "../components/StyledInput.svelte";

describe("StyledInput component", () => {
  test("Should render a StyledInput component", () => {
    const { container } = render(StyledInput);
    expect(container).toBeTruthy();
  });
  test("Should render an input with 'todo' name and 'Example' value", () => {
    const name = "todo";
    const value = "Example";
    const { container } = render(StyledInput, {
      props: {
        name,
        value,
      }
    });
    expect(container.querySelector("input").name).toBe(name);
    expect(container.querySelector("input").value).toBe(value);
  });
});
