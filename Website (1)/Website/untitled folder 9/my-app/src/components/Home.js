import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import HeroImage from '../assets/hero.png';
import product1 from "../assets/firstt.png";
import product2 from "../assets/scoend.png";
import product3 from "../assets/sixth.png";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-content">
          <h1>Welcome to Autowelt</h1>
          <p>Your one-stop solution for premium hardware products.</p>
          <a href="#products" className="btn-primary">Explore Products</a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <Link to="/product/1">
              <img src={product1} alt="Product 1" />
              <h3>Product 1</h3>
              <p>High-quality hardware for professionals.</p>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/product/2">
              <img src={product2} alt="Product 2" />
              <h3>Product 2</h3>
              <p>Durable and reliable tools for every need.</p>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/product/3">
              <img src={product3} alt="Product 3" />
              <h3>Product 3</h3>
              <p>Innovative solutions for your projects.</p>
            </Link>
          </div>
        </div>
        {/* View All Products Button */}
        <div className="view-all">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Need Help Finding the Right Product?</h2>
        <p>Contact our team of experts today!</p>
        <a href="/contact" className="btn-secondary">Get in Touch</a>
      </section>
    </div>
  );
};

export default Home;
