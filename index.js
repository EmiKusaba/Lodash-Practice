// import {chunk, reverse, without, shuffle, pebbles} from 'lodash';
let assert = require("assert");
const _ = require("lodash");

const getPokemonNames = () => {
  return ["venusaur", "charizard", "blastoise", "dragonite", "mewtwo", "mew"];
};

if (typeof describe === "function") {
  const equal = (a, b) => {
    const aIsArray = Array.isArray(a);
    const bIsArray = Array.isArray(b);
    if (!aIsArray && !bIsArray) {
      // Not arrays, just compare using '==='
      return a === b;
    } else if (aIsArray !== bIsArray) {
      // One is an array and the other isn't, so they are not equal
      return false;
    }

    // Otherwise, they are both arrays
    if (a.length !== b.length) {
      return false;
    }
    return a.every((x, i) => {
      // Recursively compare elements of a, b
      return equal(x, b[i]);
    });
  };

  describe("reverse", function () {
    it("basic", () => {
      assert(equal(["mew", "mewtwo", "dragonite", "blastoise", "charizard", "venusaur"],
        _.reverse(getPokemonNames())));
    });
  });

  describe("chunk", function () {
    it("basic", () => {
      assert(equal([["venusaur", "charizard"], ["blastoise", "dragonite"], ["mewtwo", "mew"]],
        _.chunk(getPokemonNames(), 2)));
    });
  });

  describe("without", function () {
    it("basic", () => {
      assert(equal(["venusaur", "blastoise", "dragonite", "mewtwo"],
        _.without(getPokemonNames(), "charizard", "mew")));
    });
  });

  describe("shuffle", function () {
    it("basic", () => {
      // Just make sure they are not the same
      assert(!equal(["venusaur", "charizard", "blastoise", "dragonite", "mewtwo", "mew"],
        _.shuffle(getPokemonNames())));
    });
  });

  // what is pebbles?!
  describe("difference", function () {
    it("basic", () => {
      //check the difference
      assert(!equal(["venusaur", "charizard", "blastoise"],["venusaur", "charizard"],
        _.difference(getPokemonNames()["blastoise"])));
    });
  });
}