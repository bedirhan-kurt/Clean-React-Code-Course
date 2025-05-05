import React from 'react';

const ProductCard = ({ product, onAddToCart }: { product: any, onAddToCart: () => void }) => {
    return (
        <div className="product-card p-4 border rounded">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-xl font-semibold">${product.price}</p>
            <button
                onClick={onAddToCart}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;