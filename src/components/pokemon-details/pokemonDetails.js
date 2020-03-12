import React from "react";

import "./pokemonDetails.css";

const PokemonDetails = ({ name, types, abilities, stats }) => {
  return (
    <div className="pokemon__details">
      <div className="screen">
        <p className="pokedex__name"> {name}</p>
        <div className="pokedex__info">
          <p className="pokedex__info-title">Types: </p>
          <div>
            {types.map(ty => {
              return (
                <p className="pokedex__info-value" key={Math.random()}>
                  {ty.type.name}
                </p>
              );
            })}
          </div>
        </div>

        <div className="pokedex__info">
          <p className="pokedex__info-title">Abilities: </p>
          <div>
            {abilities.map(ab => {
              return (
                <p className="pokedex__info-value" key={Math.random()}>
                  {ab.ability.name}
                </p>
              );
            })}
          </div>
        </div>

        <div className="pokedex__info">
          <p className="pokedex__info-title">Stats: </p>
          <div>
            {stats.map(stat => {
              return (
                <div className="pokedex__info-value" key={Math.random()}>
                  <p>
                    {stat.stat.name}:
                    <strong className="stat__value">{stat.base_stat}</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
