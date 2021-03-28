import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

import Button from "./Button";

it("render", () => {
  render(<Button>click</Button>);

  expect(screen.getByRole("button", { name: /click/i })).toBeVisible();
});

it("respond to click event", () => {
  const Wrapper = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsClicked(true)}>click</Button>
        {isClicked && <div>clicked</div>}
      </div>
    );
  };

  render(<Wrapper />);

  userEvent.click(screen.getByRole("button", { name: /click/i }));

  expect(screen.getByText(/clicked/i)).toBeVisible();
});
