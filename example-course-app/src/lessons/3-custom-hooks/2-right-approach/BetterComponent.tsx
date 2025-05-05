// ✅ Component is cleaner, and can share functionality of filtered items
import {useFilteredItems} from "./useFilteredItems.ts";

export function BetterComponent() {
    //@ts-ignore
    const { items, filters, handleFilters } = useFilteredItems();

    // ... other code

    return (
        <div className="h-full w1/3 p-0 flex flex-col gap-2 overflow-y-auto flex-grow">
            {items.map((item: any) => (
                //@ts-ignore
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}