// import React, { useState } from 'react';

export default function Search({ search, setSearch }) {
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleChange}>
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <button>Search</button>
    </form>
  );
}
