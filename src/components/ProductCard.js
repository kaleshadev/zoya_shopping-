
import React from "react";
import { ShoppingBag } from "lucide-react";

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </div>

      <div className="product-details">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <div className="product-rating">
          ⭐ {product.rating} / 5
        </div>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
          {product.originalPrice && (
            <span className="original-price">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </p>

        <button
          className="add-button"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag size={17} /> Add to Bag
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
