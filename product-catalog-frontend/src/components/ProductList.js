import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';
import './ProductList.css';  // Import the CSS file
import Cart from './Cart';  // Import the Cart component

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('products/');
                console.log('API Response:', response.data);  // Debugging: Log API response
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = async (product) => {
        try {
            const payload = {
                product: product.id,  // Adjusted payload structure
                quantity: 1  // Adjust quantity as needed
            };
            console.log('Add to Cart Payload:', payload);  // Debugging: Log payload
            const response = await axiosInstance.post('cart/', payload);
            console.log('Add to Cart Response:', response.data);  // Debugging: Log API response
            setCart([...cart, { product, quantity: 1 }]);
        } catch (error) {
            if (error.response) {
                console.error('Error adding to cart:', error.response.data);  // Log server error response
            } else {
                console.error('Error adding to cart:', error.message);  // Log other errors
            }
        }
    };

    const removeFromCart = async (productId) => {
        try {
            const payload = {
                product: productId,
                quantity: 0  // Indicate removal
            };
            console.log('Remove from Cart Payload:', payload);  // Debugging: Log payload
            const response = await axiosInstance.post('cart/', payload);
            console.log('Remove from Cart Response:', response.data);  // Debugging: Log API response
            setCart(cart.filter(item => item.product.id !== productId));
        } catch (error) {
            if (error.response) {
                console.error('Error removing from cart:', error.response.data);  // Log server error response
            } else {
                console.error('Error removing from cart:', error.message);  // Log other errors
            }
        }
    };

    const proceedToCheckout = () => {
        console.log('Proceeding to checkout with items:', cart);
        // Implement checkout logic here
    };

    return (
        <div className="product-list-container">
            <div className="product-list-section">
                <h1>Product List</h1>
                {products.length === 0 ? (  // Debugging: Check if products array is empty
                    <p>No products available.</p>
                ) : (
                    <ul className="product-list">
                        {products.map(product => (
                            <li key={product.id} className="product-item">
                                <div className="product-card" tabIndex="0">
                                    <div className="product-info">
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                        <p>${product.price}</p>
                                    </div>
                                    <button className="fancy-button" onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="cart-section">
                <Cart cartItems={cart} onRemoveFromCart={removeFromCart} onProceedToCheckout={proceedToCheckout} />
            </div>
        </div>
    );
};

export default ProductList;