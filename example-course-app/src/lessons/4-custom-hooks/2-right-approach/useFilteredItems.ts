import { useEffect, useState } from "react";

export function useFilteredItems() {
    const [items, setItems] = useState<any[]>([]);
    const [filters, setFilters] = useState<Record<string, any>>({});

    useEffect(() => {
        const filteredItems = filterItems(items, filters);
        setItems(filteredItems);
    }, [filters]);

    function filterItems(items: any[], filters: Record<string, any>) {
        // Example filtering logic
        return items.filter(item => Object.keys(filters).every(key => item[key] === filters[key]));
    }

    function handleFilters(newFilters: Record<string, any>) {
        setFilters(newFilters);
    }

    return {
        items,
        filters,
        handleFilters,
    };
}