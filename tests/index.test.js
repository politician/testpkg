import { describe, expect, it } from "@jest/globals";
import { myAsyncName, myName } from "../src/index";

/**
 * Sync
 */
describe("sync tests", function () {
  it("returns valid name (sync)", () => {
    expect.assertions(1);
    const name = "John";
    expect(myName(name)).toMatch("John, your name is valid!");
  });

  it("throws invalid name (sync)", () => {
    expect.assertions(1);
    const name = "John!";
    expect(() => myName(name)).toThrow("Your name is invalid");
  });
});

/**
 * Async
 */
describe("async tests", function () {
  it("returns valid name (async)", async () => {
    expect.assertions(1);
    const name = "John";
    expect(await myAsyncName(name)).toMatch("John, your name is valid!");
  });

  it("throws invalid name (async)", async () => {
    expect.assertions(1);
    const name = "John!";
    await expect(myAsyncName(name)).rejects.toThrow("Your name is invalid");
  });
});
