// import {chunk, reverse, without, shuffle, pebbles} from 'lodash';
let assert = require('assert');
const _ = require('lodash');
const fetch = require('node-fetch')
const getPokemonNames = (offset = 0, num = 6) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${num}/`)
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      // console.log('data', data)

      // For each pokemon, get more data about it from API
      // _.reverse(data)
      const reverse = _.reverse(data.results)
      return reverse
      // const chunk = _.chunk(data.results, 2)
      // console.log(chunk)
      // const without = _.without(data.results, "name")
      // console.log(without)
      // const shuffle = _.shuffle(data.results)
      // console.log(shuffle)
      // const pebbles = _.pebbles(data.results)
      // getPokemonData(pokemon);
      // arrayOfPokemon.push(pokemon)
    })
    .catch(err => console.log(`Error,  ${err}`));
};
getPokemonNames();


//Unit tests
if (typeof describe === 'function') {
  // describe('getPokemonNames', function () {
    // it('Correct url', () => {
    //   const fakeFetch = (url) => {
    //     assert.equal('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6/', url);
    //     return new Promise(() => { });
    //   };
    //   getPokemonNames(fakeFetch, 0, 6);
    // });

    describe('reverse', function () {
      it("should return array of reverse", () => {
        assert.equal([ { name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/' },
      { name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/' },
      { name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/' } ])
      });
    });

    // describe('chunk', function () {
    //   it("chunk 2", () => {
    //     assert.equal("left", battle(mew, rattata));
    //   });
    // });
}