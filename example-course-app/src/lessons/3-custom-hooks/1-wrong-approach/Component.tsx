import { useEffect, useState } from "react";

export function Component() {
    const [items, setItems] = useState<any[]>([]);
    //@ts-ignore
    const [filters, setFilters] = useState<Record<string, any>>({});

    useEffect(() => {
        const filteredItems: any[] = filterItems(items, filters);
        setItems(filteredItems);
    }, [filters]);

    function filterItems(items: any[], filters: Record<string, any>) {
        // Example filtering logic
        return items.filter(item => Object.keys(filters).every(key => item[key] === filters[key]));
    }

    return (
        <div className="h-full w1/3 p-0 flex flex-col gap-2 overflow-y-auto flex-grow">
            {items.map((item: any) => (
                //@ts-ignore
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}