export default function Search({ search, setSearch, handleNameSearch }) {
  async function handleSubmit(e) {
    e.preventDefault();

    handleNameSearch(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <button type="submit">Search</button>
    </form>
  );
}
