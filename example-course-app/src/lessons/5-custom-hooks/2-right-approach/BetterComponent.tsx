// ✅ Component is cleaner, and can share functionality of filtered items
import {useFilteredItems} from "./useFilteredItems.ts";

export function BetterComponent() {
    //@ts-ignore
    const { items, filters, handleFilters } = useFilteredItems();

    // ... other code
}