import { useState } from 'react';

export function useSearch(items) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(items);

    const handleQueryChange = (value) => {
        setQuery(value);
        const filtered = items.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    };

    return { query, results, onQueryChange: handleQueryChange };
}