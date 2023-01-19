import React from 'react';
import { fetchPokemon } from '../../services/fetchPokemom.js';

export default function Card({ pokemon, url_image }) {
    async function pokemonSubmit(e) {
        e.preventDefault
    }
  return (
    <div className='pokemon-card'>
      <h2>{pokemon}</h2>
      <img src={url_image}></img>
    </div>
  );
}