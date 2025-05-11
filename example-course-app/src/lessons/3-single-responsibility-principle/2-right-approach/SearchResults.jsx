export default function SearchResults({ results }) {
    return (
        <ul>
            {results.map((r, i) => (
                <li key={i}>{r}</li>
            ))}
        </ul>
    );

}