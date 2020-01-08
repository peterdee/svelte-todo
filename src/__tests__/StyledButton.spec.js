import { render } from "@testing-library/svelte";
import StyledButton from "../components/StyledButton.svelte";

describe("StyledButton component", () => {
  test("Should render a StyledButton component", () => {
    const { container } = render(StyledButton);
    expect(container).toBeTruthy();
  });
  test("Should render a disabled button with 'hey' text", () => {
    const text = "hey";
    const { container, getByText } = render(StyledButton, {
      props: {
        disabled: true,
        text,
      }
    });
    expect(container.querySelector("button").disabled).toBeTruthy();
    expect(getByText(text)).toBeInTheDocument();
  });
});
