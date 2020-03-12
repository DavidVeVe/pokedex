import React, { useState, useEffect } from "react";

import PokemonDetails from "./components/pokemon-details/pokemonDetails";
import Pokemon from "./components/pokemon/pokemon";

import "./app.css";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonImage, setPokemonImage] = useState([]);
  const [selected, setSelected] = useState(0);
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [count, setCounter] = useState(1);

  useEffect(() => {
    const fetchPokemon = async () => {
      const apiPokemons = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${count}`
      );
      const pokemonJsoned = await apiPokemons.json();
      setPokemonImage(pokemonJsoned.sprites);
      setPokemon(pokemonJsoned);
    };
    fetchPokemon();
  }, [count]);

  useEffect(() => {
    const fetchDetails = async () => {
      const apiDetails = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selected}`
      );
      const jsonedDetails = await apiDetails.json();
      setDetails(jsonedDetails);
      setTypes(jsonedDetails.types);
      setStats(jsonedDetails.stats);
      setAbilities(jsonedDetails.abilities);
    };
    fetchDetails();
  }, [selected]);

  const next = () => {
    setCounter(count + 1);
  };
  const prev = () => {
    setCounter(count - 1);
  };

  return (
    <section className="pokedex">
      <section className="pokeList">
        <Pokemon
          image={pokemonImage.front_default}
          name={pokemon.name}
          selectOne={setSelected}
          id={pokemon.id}
        />
        <div>
          <button className="red__btn" onClick={prev}>
            Prev
          </button>
          <button className="blue__btn" onClick={next}>
            Next
          </button>
        </div>
      </section>
      <PokemonDetails
        name={details.name}
        types={types}
        abilities={abilities}
        stats={stats}
      />
    </section>
  );
}

export default App;
