import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders Vite and React logos with correct links", () => {
    render(<App />);

    const viteLogo = screen.getByRole("img", { name: /Vite logo/i });
    const reactLogo = screen.getByAltText("React logo");

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();

    expect(viteLogo.closest("a")).toHaveAttribute("href", "https://vitejs.dev");
    expect(reactLogo.closest("a")).toHaveAttribute("href", "https://react.dev");
  });
});
