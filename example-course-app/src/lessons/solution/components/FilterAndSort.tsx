const FilterAndSort = ({ filters, onFilterChange, onSortChange }: any) => {
    return (
        <div className="filters mb-4">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" value={filters.category} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
            </select>

            <label htmlFor="priceRange">Price Range</label>
            <input
                type="text"
                name="priceRange"
                id="priceRange"
                placeholder="e.g. 50,200"
                value={filters.priceRange.join(',')}
                onChange={onFilterChange}
            />

            <label htmlFor="sortBy">Sort By</label>
            <select name="sortBy" id="sortBy" onChange={onSortChange}>
                <option value="price">Price</option>
                <option value="name">Name</option>
            </select>
        </div>
    );
};

export default FilterAndSort;