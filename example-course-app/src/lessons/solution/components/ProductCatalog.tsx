import { useState, ChangeEvent } from 'react';
import useProducts from '../hooks/useProducts.ts';
import useCart from '../hooks/useCart.ts';
import ProductCard from './ProductCard.tsx';
import FilterAndSort from './FilterAndSort.tsx';

const ProductCatalog = () => {
    const [filters, setFilters] = useState<any>({ category: '', priceRange: [0, 1000] });
    const [sortBy, setSortBy] = useState<string>('price');
    const { products, loading, error } = useProducts(filters, sortBy);
    const { cart, addToCart } = useCart();

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'category') {
            setFilters((prev: any) => ({ ...prev, category: value }));
        } else if (name === 'priceRange') {
            setFilters((prev: any) => ({ ...prev, priceRange: value.split(',').map((num) => parseInt(num)) }));
        }
    };

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <FilterAndSort
                filters={filters}
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
            />

            <div className="product-list grid grid-cols-3 gap-4">
                {loading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => addToCart(product)}
                        />
                    ))
                )}
            </div>

            <div className="cart mt-6">
                <h3 className="text-xl font-bold">Cart</h3>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="border-b py-2">
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductCatalog;