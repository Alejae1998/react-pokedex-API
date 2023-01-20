import React from 'react';

export default function Card({ pokemon, url_image, height, hp, type_1 }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="image" src={url_image} />
        </div>
        <div className="flip-card-back">
          <div className="pokemon-card">
            <h1>NAME: {pokemon}</h1>
            <p>HEIGHT:{height}</p>
            <p>HP: {hp}</p>
            <p>TYPE: {type_1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
