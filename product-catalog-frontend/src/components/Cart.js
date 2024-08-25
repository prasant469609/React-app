import React from 'react';
import './Cart.css';  // Import the CSS file

const Cart = ({ cartItems, onRemoveFromCart, onProceedToCheckout }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map(item => (
                            <li key={item.product.id} className="cart-item">
                                <div className="cart-item-info">
                                    <h2>{item.product.name}</h2>
                                    <p>{item.product.description}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>${item.product.price}</p>
                                </div>
                                <button className="remove-button" onClick={() => onRemoveFromCart(item.product.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h2>Total Amount: ${calculateTotal()}</h2>
                    </div>
                    <button className="checkout-button" onClick={onProceedToCheckout}>Proceed to Checkout</button>
                </>
            )}
        </div>
    );
};

export default Cart;