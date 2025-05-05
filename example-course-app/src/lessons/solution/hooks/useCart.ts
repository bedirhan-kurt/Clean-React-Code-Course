import { useState } from 'react';

const useCart = () => {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (product: any) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return { cart, addToCart };
};

export default useCart;