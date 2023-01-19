import { usePokemon } from '../../hooks/pokemon.js';
import Select from '../Select.js/Select.js';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div>
        {pokemon.map((poke) => (
          <p key={poke._id}>{poke.pokemon}</p>
        ))}
      </div>
    </>
  );
}
