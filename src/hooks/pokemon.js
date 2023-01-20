import { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonType, fetchTypes } from '../services/fetchPokemom.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    const data = await fetchPokemonType(type);
    setPokemon(data);
  };
  return { pokemon, types, handleTypeChange, search, setSearch, loading };
}
