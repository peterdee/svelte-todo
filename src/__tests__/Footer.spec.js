import { render } from "@testing-library/svelte";

import Footer from "../components/Footer.svelte";

describe("Footer component", () => {
  test("Should render a Footer component", () => {
    const { container } = render(Footer);
    expect(container).toBeTruthy();
  });
  test("Should have a Github link", () => {
    const { container } = render(Footer);
    const href = "https://github.com/peterdee";
    expect(container.querySelector("a").href).toBe(href);
  });
});
