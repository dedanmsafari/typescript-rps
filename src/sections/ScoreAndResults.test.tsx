import { describe, expect, it, vi } from "vitest";
import { screen, render, fireEvent, act } from "@testing-library/react";
import ChooseAndPlay from "./ChooseAndPlay";
import ScoreAndResults from "./ScoreAndResults";
import OptionsProvider from "../context/options.context";

describe("Score And Result", () => {
  it("Should display 1 second after elapsed time of 2 seconds on the timer", () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ChooseAndPlay />
        <ScoreAndResults />
      </OptionsProvider>
    );

    const paper = screen.getByText(/paper/i);
    const play = screen.getByText("play");

    expect(paper).toBeInTheDocument();
    expect(play).toBeInTheDocument();

    fireEvent.click(paper);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByTestId("timer")).toHaveTextContent("1");
  });
  it("Should display 2 seconds after elapsed time of a second on the timer", () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ChooseAndPlay />
        <ScoreAndResults />
      </OptionsProvider>
    );

    const paper = screen.getByText(/paper/i);
    const play = screen.getByText("play");

    expect(paper).toBeInTheDocument();
    expect(play).toBeInTheDocument();

    fireEvent.click(paper);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId("timer")).toHaveTextContent("2");
  });
});
