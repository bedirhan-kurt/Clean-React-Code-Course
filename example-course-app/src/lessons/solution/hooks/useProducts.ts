import { useState, useEffect } from 'react';

const useProducts = (filters: any, sortBy: string) => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load products.');
                setLoading(false);
            });
    }, [filters, sortBy]);

    const filteredAndSortedProducts = products
        .filter((product) => {
            return (
                (filters.category === '' || product.category === filters.category) &&
                product.price >= filters.priceRange[0] &&
                product.price <= filters.priceRange[1]
            );
        })
        .sort((a, b) => {
            if (sortBy === 'price') {
                return a.price - b.price;
            } else if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });

    return { products: filteredAndSortedProducts, loading, error };
};

export default useProducts;