import { describe, it, expect } from "vitest";
import { randomValue } from "./randomVal";

describe("generate random value", () => {
  it("Should return a random value between 0 and 2", () => {
    const randomVal = randomValue();

    expect(randomVal).toBeLessThanOrEqual(2);
    expect(randomVal).toBeGreaterThanOrEqual(0);
  });
});
