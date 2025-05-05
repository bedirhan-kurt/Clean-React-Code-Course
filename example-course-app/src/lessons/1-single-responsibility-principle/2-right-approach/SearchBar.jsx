import { useState } from 'react';
import SearchInput from "./SearchInput.jsx";
import SearchResults from "./SearchResults.jsx";
import useSearch from "./useSearch.js";

export default function SearchBar({ items }) {
    const { query, setQuery, results } = useSearch({ items });

    return (
        <div>
            <SearchInput query={query} setQuery={setQuery()}></SearchInput>
            <SearchResults results={results}></SearchResults>
        </div>
    );
};