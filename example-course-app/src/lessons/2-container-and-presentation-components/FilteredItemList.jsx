import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function FilteredItemList() {
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const filteredItems = filterItems(items, filters);
        setItems(filteredItems);
    }, [filters]);

    function filterItems(items, filters) {
        return items.filter(item =>
            Object.keys(filters).every(key => item[key] === filters[key])
        );
    }

    return (
        <div className="h-full w-1/3 p-0 flex flex-col gap-2 overflow-y-auto flex-grow">
            {items.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}