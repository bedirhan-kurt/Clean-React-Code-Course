export default function SearchInput({ query, setQuery }) {
    return (
        <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        />
    );
}