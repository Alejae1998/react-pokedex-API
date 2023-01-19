import React from 'react';

export default function Search({ search, setSearch }) {
  return (
    <form>
      <input onChange={(e) => setSearch(e.target.value)}>
      </input>
      <button>Search</button>
    </form>
  );
}
