const getAboutUsLink = require("./index");

test("test case for us language", () => {
  expect(getAboutUsLink("en-US")).toBe("/about-us");
  expect(getAboutUsLink("cs-CZ")).toBe("");
});
