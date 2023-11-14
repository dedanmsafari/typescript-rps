import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HandOptions } from "../models/Options";
import HandSelection from "./HandSelection";
import { FaHandPaper } from "react-icons/fa";
import { PaperOption, RockOption } from "../actions/OptionActions";
import userEvent from "@testing-library/user-event";
import OptionsProvider from "../context/options.context";

vi.mock("./HandSelection.module.css", () => {
  return {
    default: {
      choiceBtn: "choiceBtn",
      activeChoice: "activeChoice",
    },
  };
});

describe("Hand Selection", () => {
  it("should render the hand selection component with the right props", () => {
    render(
      <OptionsProvider>
        <HandSelection
          name="paper"
          icon={<FaHandPaper data-testid="paper" />}
          index={0}
          item={{
            name: HandOptions.rock,
            icon: <FaHandPaper size="3em" color="grey" />,
            dispatch: RockOption,
          }}
        />
      </OptionsProvider>
    );

    const hand = screen.getByText(/paper/i);
    const icon = screen.getByTestId("paper");

    expect(hand).toBeInTheDocument();
    expect(icon).toBeVisible();
  });

  it("should highlight the correct component with active status", async () => {
    const user = userEvent.setup();

    render(
      <OptionsProvider>
        <HandSelection
          name="paper11"
          icon={<FaHandPaper data-testid="paper" />}
          index={1}
          item={{
            name: HandOptions.rock,
            icon: <FaHandPaper size="3em" color="grey" />,
            dispatch: PaperOption,
          }}
        />
      </OptionsProvider>
    );

    const hand = screen.getByText(/paper11/i);

    await user.click(hand);

    expect(hand).toHaveClass("activeChoice");
  });
});
