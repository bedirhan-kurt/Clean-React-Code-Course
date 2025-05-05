/* Oppgaver:
 * 1) Les gjennom koden og få en helhetsforståelse av hva komponenten gjør.
 * 2) Identifiser hvilke clean code-prinsipper som brytes, og kommenter disse direkte i koden.
 * 3) Foreslå konkrete forbedringer for hvert punkt som er nevnt i steg 2.
 *
 * BONUS: Refaktorer komponenten slik at den følger prinsippene for clean code og komponentarkitektur i React.
*/

import {useState, useEffect, ChangeEvent} from 'react';

const ProductCatalog = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filters, setFilters] = useState<any>({category: '', priceRange: [0, 1000]});
    const [sortBy, setSortBy] = useState<string>('price');
    const [cart, setCart] = useState<any[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load products.');
                setLoading(false);
            });
    }, [filters, sortBy]);

    const fetchProducts = async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        return data;
    };

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        if (name === 'category') {
            setFilters((prev: any) => ({...prev, category: value}));
        } else if (name === 'priceRange') {
            setFilters((prev: any) => ({...prev, priceRange: value.split(',').map((num) => parseInt(num))}));
        }
    };

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    const addToCart = (product: any) => {
        setCart((prevCart) => [...prevCart, product]);
    };

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

    return (
        <div className="container mx-auto p-4">
            <div className="filters mb-4">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleFilterChange}>
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
                    onChange={handleFilterChange}
                />

                <label htmlFor="sortBy">Sort By</label>
                <select name="sortBy" id="sortBy" onChange={handleSortChange}>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                </select>
            </div>

            <div className="product-list grid grid-cols-3 gap-4">
                {loading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    filteredAndSortedProducts.map((product) => (
                        <div key={product.id} className="product-card p-4 border rounded">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            <p className="text-gray-500">{product.category}</p>
                            <p className="text-xl font-semibold">${product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        </div>
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