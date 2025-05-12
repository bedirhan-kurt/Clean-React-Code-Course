export default function SearchResults({ results }) {
    return (
        <ul>
            {results.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}