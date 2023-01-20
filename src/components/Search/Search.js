// import React, { useState } from 'react';
import { fetchByName } from '../../services/fetchPokemom.js';
export default function Search({ search, setSearch }) {
  async function handleChange(e) {
    e.preventDefault();

    const {
      data: { results },
    } = await fetchByName(search);

    setSearch(results);
  }

  return (
    <form onSubmit={handleChange}>
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <button>Search</button>
    </form>
  );
}
