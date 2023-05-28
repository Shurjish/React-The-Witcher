import React, { useContext } from "react";
import { Context } from "../../context/context";
import "./CardSets.scss";
const CardSets = () => {
  const { characters } = useContext(Context);

  return (
    <div className="characters">
      {characters.map((character) => (
        <>
          {
            <article key={character._id} className="carta">
              <h2>{character.name}</h2>
              <img src={character.illustration} alt="Card"></img>
              <h5>{character.description}</h5>
            </article>
          }
        </>
      ))}
    </div>
  );
};

export default CardSets;
