import SearchInput from './SearchInput';
import SearchResults from './SearchResults.jsx';
import {useSearch} from "./useSearch.js";

export default function SearchBar({ items }) {
    const { query, results, handleSearch } = useSearch(items);

    return (
        <div>
            <SearchInput query={query} onChange={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
}