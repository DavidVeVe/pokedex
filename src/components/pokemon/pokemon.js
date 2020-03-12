import React from "react";

import "./pokemon.css";

const Pokemon = ({ image, name, selectOne, id }) => {
  return (
    <div
      className="pokemon__card"
      onClick={() => {
        selectOne(id);
      }}
    >
      <p className="pokemon__name">Name: {name}</p>
      <figure className="pokemon__figure">
        <img src={image} alt="" />
      </figure>
    </div>
  );
};

export default Pokemon;
