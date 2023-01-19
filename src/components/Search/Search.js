import React, { useState } from 'react';

export default function Search({ search, setSearch }) {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(`search`, search);
    setLoading(true);
  };

  return (
    <form onSubmit={handleChange}>
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <button>Search</button>
    </form>
  );
}
