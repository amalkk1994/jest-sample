const getUserDisplayName = require("./mockTest");

jest.mock("./UserStore", () => ({
  getUser: jest.fn().mockImplementation((arg) => ({
    FirstName: "Amal",
    LastName: "K K",
  })),
  setUser: jest.fn(),
}));

test("returns display name", () => {
  expect(getUserDisplayName(1)).toBe("K K, Amal");
});
