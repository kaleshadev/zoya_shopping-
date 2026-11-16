
import React from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ search, category, setCategory, addToCart }) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products-container" id="products">
      <h2 className="section-title">Explore Our Collection</h2>

      <div className="category-list">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found. Try another search.</p>
        )}
      </div>
    </section>
  );
}

export default ProductList;
