import { describe, expect, it, vi } from "vitest";
import { screen, render, fireEvent, act } from "@testing-library/react";
import ChooseAndPlay from "./ChooseAndPlay";
import ScoreAndResults from "./ScoreAndResults";
import OptionsProvider from "../context/options.context";

vi.mock("../utils/functions/randomVal", () => {
  return {
    randomValue: () => 0,
  };
});

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
        <ScoreAndResults />
        <ChooseAndPlay />
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

  it("Should display the Player Winner after timer goes off in 3 seconds", () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const paper = screen.getByText(/paper/i);

    const play = screen.getByText("play");

    expect(paper).toBeInTheDocument();

    expect(play).toBeInTheDocument();

    fireEvent.click(paper);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByText("Player Wins!")).toBeInTheDocument();
    expect(
      screen.getByText("There is still hope left for Humanity!")
    ).toBeInTheDocument();
    screen.debug();

    expect(screen.getByText(/Player: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 0/)).toBeInTheDocument();

    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/paper/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/rock/i)).toHaveLength(2);
  });

  it("Should display the Computer Winner after timer goes off in 3 seconds", () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const scissors = screen.getByText(/scissors/i);

    const play = screen.getByText("play");

    expect(scissors).toBeInTheDocument();

    expect(play).toBeInTheDocument();

    fireEvent.click(scissors);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByText("Computer Wins!")).toBeInTheDocument();
    expect(
      screen.getByText("AI will rule you one day! ~ Computer")
    ).toBeInTheDocument();
    screen.debug();

    expect(screen.getByText(/Player: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 1/)).toBeInTheDocument();

    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/scissors/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/scissors/i)).toHaveLength(2);
  });
  it("Should display a Draw after timer goes off in 3 seconds", () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const rock = screen.getByText(/rock/i);

    const play = screen.getByText("play");

    expect(rock).toBeInTheDocument();

    expect(play).toBeInTheDocument();

    fireEvent.click(rock);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByText("Draw")).toBeInTheDocument();
    expect(screen.getByText("What a Draw. Play Again!")).toBeInTheDocument();
    screen.debug();

    expect(screen.getByText(/Player: 0.5/)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 0.5/)).toBeInTheDocument();

    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/rock/i)).toHaveLength(3);
  });
});
