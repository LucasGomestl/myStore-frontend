import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Icon from "../index";

describe("Icon tests", () => {
  it("Should render the Icon", () => {
    const { container, queryByTestId } = render(<Icon icon={faSearch} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(queryByTestId("link")).not.toBeInTheDocument();
  });

  it("Should render the Icon with a link around", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Icon icon={faSearch} link="/" />
      </BrowserRouter>
    );
    expect(getByTestId("link")).toBeInTheDocument();
  });
});
