import { render } from "@testing-library/svelte";
import App from "../App.svelte";

describe("App wrapper", () => {
  test("Should render a wrapper component", () => {
    const { container } = render(App);

    expect(container).toBeTruthy();
  });
});
