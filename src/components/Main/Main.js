import { usePokemon } from '../../hooks/pokemon.js';
import Select from '../Select.js/Select.js';
import Search from '../Search/Search.js';
import Card from '../Card/Card.js';
export default function Main() {
  const { pokemon, types, handleTypeChange, search, setSearch, loading, handleNameSearch } =
    usePokemon();
  if (loading)
    return (
      <p>
        Loading...<span className="loader"></span>
      </p>
    );
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Search search={search} setSearch={setSearch} handleNameSearch={handleNameSearch} />
      <div className="card-holder">
        {pokemon.map((poke) => (
          <Card key={poke._id} {...poke} />
        ))}
      </div>
    </>
  );
}
