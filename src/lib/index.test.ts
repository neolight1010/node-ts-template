import { helloWorld } from "@/lib/index.js";
import { describe, expect, it } from "vitest";

describe("hello world", () => {
  it("should return hello world", () => {
    expect(helloWorld()).toEqual("Hello World!");
  });
});
