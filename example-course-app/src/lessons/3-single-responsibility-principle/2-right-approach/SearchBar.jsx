import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import {useSearch} from "./useSearch.js";

export default function SearchBar({ items }) {
    const { query, results, onQueryChange } = useSearch(items);

    return (
        <div>
            <SearchInput query={query} onChange={onQueryChange} />
            <SearchResults results={results} />
        </div>
    );
}