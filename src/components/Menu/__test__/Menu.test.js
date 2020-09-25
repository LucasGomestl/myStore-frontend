import React from "react";
import { render } from "@testing-library/react";
import Menu from "../index";

describe("Menu tests", () => {
  it("Should render menu", () => {
    const { container } = render(<Menu />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
