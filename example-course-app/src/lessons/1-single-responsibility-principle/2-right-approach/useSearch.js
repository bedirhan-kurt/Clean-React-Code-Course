import {useEffect, useState} from "react";

export default function useSearch({items}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(items);

    useEffect(() => {
        const filtered = items.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    }, [query, items]);

    return { query, setQuery, results };

}