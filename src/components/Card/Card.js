import React from 'react';

export default function Card({ pokemon, url_image, height, hp }) {
  return (
    <div className="pokemon-card">
      <img className='image' src={url_image} />
      <h1>NAME: {pokemon}</h1>
      <p>HEIGHT:{height}</p>
      <p>HP: {hp}</p>
    </div>
  );
}
