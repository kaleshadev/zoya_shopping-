
import React from "react";
import { X, Trash2, ShoppingBag } from "lucide-react";

function Cart({
  cart,
  isOpen,
  closeCart,
  updateQuantity,
  removeFromCart
}) {
  if (!isOpen) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (cart.length === 0) return;

    alert("Your demo order has been placed successfully!");
    closeCart();
  };

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <aside
        className="cart-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cart-header">
          <h2>
            <ShoppingBag size={21} /> My Shopping Bag
          </h2>

          <button onClick={closeCart} aria-label="Close cart">
            <X />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={45} />
            <h3>Your bag is empty</h3>
            <p>Add products to start shopping.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>₹{item.price.toLocaleString("en-IN")}</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove product"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <h3>
                Total: ₹{total.toLocaleString("en-IN")}
              </h3>

              <button
                className="checkout-button"
                onClick={placeOrder}
              >
                Place Demo Order
              </button>

              <p>Demo checkout only. No real payment is collected.</p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;
