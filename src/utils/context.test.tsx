import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createContext } from "./context";

describe("Creating Context", () => {
  const [useContext, Provider] = createContext<{ foo: string }>();
  const TestComponent = () => {
    try {
      useContext();
      return <p>Success</p>;
    } catch (error) {
      return <p>{(error as Error).message}</p>;
    }
  };

  it("Should create context", () => {
    render(
      <Provider value={{ foo: "Context" }}>
        <TestComponent />
      </Provider>
    );

    expect(screen.getByText("Success")).toBeInTheDocument();
  });
  it("Should throw an error with no context used", () => {
    render(<TestComponent />);

    expect(
      screen.getByText("Context can only be used inside a provider")
    ).toBeInTheDocument();
    expect(screen.queryByText("Success")).not.toBeInTheDocument();
  });
});
