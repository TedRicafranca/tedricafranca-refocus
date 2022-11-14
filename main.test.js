import { sort, search, newsList } from "./main.js";
require('jest-sorted');


//Example testing for search function
test("Search function testing with value Buried", () => {
  expect(search("Buried")).toEqual(["Buried underpants and tea bags help scientists evaluate soil"]);
});

test("Test Search with value Decoder if it returns an array with 2 elements", () => {
  expect(search("Decoder").length).toEqual(2);
});

test("Test Search if it returns an array", () => {
  expect(Array.isArray(search())).toBe(true);
});

test("Test Sort if returns an array in ascending order", () => { 
  expect(sort("ascending")).toBeSorted({ ascending: true });
});

test("Test Sort if returns an array in ascending order", () => { 
  expect(sort("descending")).toBeSorted({ descending: true });
});