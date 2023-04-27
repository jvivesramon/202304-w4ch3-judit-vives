import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe(`Given a component Info`, () => {
  describe(`When it receives a true`, () => {
    test(`Then it should show the message "Calling..."`, () => {
      const expectedText = "Calling...";

      render(<Info />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
