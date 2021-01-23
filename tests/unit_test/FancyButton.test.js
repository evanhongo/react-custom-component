import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { FancyButton } from "../../src";

describe("FancyButton", () => {
  afterEach(cleanup);

  describe("render", () => {
    test("it should render normally without children", () => {
      const { getByTestId } = render(<FancyButton />);
      expect(getByTestId("fancyButton").textContent).toMatch("");
    });

    test("it should render normally with children", () => {
      const text = "Hello World";
      const { getByTestId } = render(
        <FancyButton>
          <div>{text}</div>
        </FancyButton>
      );
      expect(getByTestId("fancyButton").textContent).toMatch(text);
    });
  });

  describe("onClick", () => {
    test("it is called when clicked", () => {
      const onClick = jest.fn();
      const { getByTestId } = render(<FancyButton onClick={onClick} />);
      fireEvent.click(getByTestId("fancyButton"));
      expect(onClick).toBeCalled();
    });
  });
});
