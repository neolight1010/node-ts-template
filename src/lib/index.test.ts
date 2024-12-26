import { describe, expect, it } from "vitest";
import { helloWorld } from "./index.js";

describe("hello world", () => {
  it("should return hello world", () => {
    expect(helloWorld()).toEqual("Hello World!");
  });
});
