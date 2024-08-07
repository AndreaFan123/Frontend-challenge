import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar component", () => {
  // Test case 1: Navbar renders without crashing

  it("should render without crashing", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  // Test case 2: In mobile version, it should click button and open mobile navbar
  it("should open and close mobile navbar", () => {
    render(<Navbar />);

    const openMenuBtn = screen.getByTestId("open-mobile-menu");
    expect(openMenuBtn).toBeInTheDocument();

    // Open the mobile menu
    fireEvent.click(openMenuBtn);

    // Check if the mobile navbar is now visible
    const mobileNavbar = screen.getByTestId("mobile-menu");
    expect(mobileNavbar).toBeInTheDocument();

    // Check if the close button exists
    const closeMenuBtn = screen.getByTestId("close-mobile-menu");
    expect(closeMenuBtn).toBeInTheDocument();

    // Close the mobile menu
    fireEvent.click(closeMenuBtn);
    expect(mobileNavbar).not.toBeInTheDocument();
  });
});
