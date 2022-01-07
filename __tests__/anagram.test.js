const isAnagram = require("../javascriptFunctions/anagram");

test("anna is an anagram", () => {
  expect(isAnagram("anna")).toBe("Is an anagram");
});

test("animna is not an anagram", () => {
  expect(isAnagram("animna")).toBe("Not an anagram");
});

// test("anbina is an anagram", () => {
//   expect(isAnagram("anbina")).toBe("Is an anagram");
// });

test("ala is an anagram", () => {
  expect(isAnagram("ala")).toBe("Is an anagram");
});

test("alp is not an anagram", () => {
  expect(isAnagram("alp")).toBe("Not an anagram");
});
