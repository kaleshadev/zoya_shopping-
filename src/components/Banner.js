
import React from "react";
import { ArrowRight } from "lucide-react";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <p className="banner-label">THE ZOYA COLLECTION</p>

        <h1>
          Discover Your
          <br />
          Everyday Style
        </h1>

        <p className="banner-description">
          Explore fashion, lifestyle and electronics
          at amazing prices.
        </p>

        <a href="#products" className="banner-button">
          Shop Now <ArrowRight size={18} />
        </a>
      </div>

      <div className="banner-decoration">
        <span>ZOYA</span>
      </div>
    </section>
  );
}

export default Banner;
