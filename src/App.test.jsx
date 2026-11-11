import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Portfolio Platform", () => {

  test("displays the projects", () => {
    render(<App />);

    expect(
      screen.getByText("Personal Portfolio")
    ).toBeInTheDocument();
  });

  test("allows users to search projects", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(
      "Search projects..."
    );

    fireEvent.change(searchInput, {
      target: { value: "Restaurant" }
    });

    expect(
      screen.getByText("Restaurant Website")
    ).toBeInTheDocument();
  });

  test("allows users to add projects", () => {
    render(<App />);

    fireEvent.change(
      screen.getByPlaceholderText("Project title"),
      { target: { value: "My React App" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Project description"),
      { target: { value: "My first React application" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Add Project" })
    );

    expect(
      screen.getByText("My React App")
    ).toBeInTheDocument();
  });

  test("allows users to delete projects", () => {
    render(<App />);

    const deleteButtons = screen.getAllByRole("button", {
      name: "Delete Project"
    });

    fireEvent.click(deleteButtons[0]);

    expect(
      screen.queryByText("Personal Portfolio")
    ).not.toBeInTheDocument();
  });

});