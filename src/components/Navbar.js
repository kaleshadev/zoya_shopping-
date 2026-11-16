
import React from "react";
import { Search, ShoppingBag, User, Heart } from "lucide-react";

function Navbar({ search, setSearch, cartCount, openCart }) {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <a href="/" className="logo">
          ZOYA<span>.</span>
        </a>

        <div className="search-box">
          <Search size={19} />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="navbar-actions">
          <button className="nav-icon" aria-label="Account">
            <User size={21} />
            <span>Profile</span>
          </button>

          <button className="nav-icon" aria-label="Wishlist">
            <Heart size={21} />
            <span>Wishlist</span>
          </button>

          <button className="nav-icon cart-icon" onClick={openCart}>
            <ShoppingBag size={21} />
            <span>Bag</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </button>
        </div>
      </div>

      <nav className="navbar-categories">
        <a href="#products">All Products</a>
        <a href="#products">Men</a>
        <a href="#products">Women</a>
        <a href="#products">Electronics</a>
        <a href="#products">Footwear</a>
        <a href="#products">Accessories</a>
      </nav>
    </header>
  );
}

export default Navbar;
