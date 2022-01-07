const stringCompression = require("../javascriptFunctions/stringCompression");

test("aaabcccccaa should be a3b1c5a2", () => {
  expect(stringCompression("aaabcccccaa")).toBe("a3b1c5a2");
});

test("abbcbda should be abbcbda", () => {
  expect(stringCompression("abbcbda")).toBe("abbcbda");
});
