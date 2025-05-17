import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../style/Productpage.css';
import product1 from '../assets/fisrt.png';
import product2 from '../assets/firstt.png';
import product3 from '../assets/secoend.png';
import product4 from '../assets/scoend.png';
import product5 from '../assets/third.png';
import product6 from '../assets/fourth.png';
import product7 from '../assets/fourth.jpeg';
import product8 from '../assets/fifth.png';
import product9 from '../assets/fifthh.png';
import product10 from '../assets/sixth.png';
import product11 from '../assets/seventh.png';
import product12 from '../assets/seventhh.png';

const products = [
  { id: 1, name: 'Automatic Tyre Inflator', image: product1 },
  { id: 2, name: 'Automatic Tyre Inflator', image: product2},
  { id: 3, name: 'Viking Oil Dispenser (Model: PT-VK04)', image: product3 },
  { id: 4, name: 'Viking Oil Dispenser (Model: PT-VK04)', image: product4 },
  { id: 5, name: 'Automatic Nitrogen Tyre Inflator', image: product5 },
  { id: 6, name: 'Viking Oil Dispenser', image: product6 },
  { id: 7, name: 'Viking Oil Dispenser', image: product7 },
  { id: 8, name: 'Ad-Blue Dispenser / E-Disel Exhaust Fluid (DEF)', image: product8 },
  { id: 9, name: 'Ad-Blue Dispenser / E-Disel Exhaust Fluid (DEF)', image: product9 },
  { id: 10, name: 'Mak Quik (Lubricant Oil Changer)', image: product10 },
  { id: 11, name: 'Lubricated Air Compressor', image: product11 },
  { id: 12, name: 'Lubricated Air Compressor', image: product12 },
];

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInquiry = (productName) => {
    navigate(`/inquiry?product=${encodeURIComponent(productName)}`);
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <div className="button-container">
              <Link to={`/product/${product.id}`} className="view-details-btn">
                View Details
              </Link>
              <button
                className="inquiry-btn"
                onClick={() => handleInquiry(product.name)}
              >
                Inquiry
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
