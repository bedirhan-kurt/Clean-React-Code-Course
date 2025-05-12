import { useState } from 'react';

export default function SearchBar({ items }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(items);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        const filtered = items.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    };

    return (
        <div>
            <input value={query} onChange={handleSearch} placeholder="Search..." />
            <ul>
                {results.map((r, i) => (
                    <li key={i}>{r}</li>
                ))}
            </ul>
        </div>
    );
};