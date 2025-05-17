import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact.js';
import ProductPage from './components/ProductPage';
import ProductDetailPage from './components/ProductDetail.js'; // Correct import for ProductDetailPage
import InquiryPage from './components/Inquiry.js'

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar at the top */}
      <div style={{ paddingTop: '80px' }}> {/* Padding to prevent content overlap */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/products" element={<ProductPage />} /> {/* Product page route */}
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Product detail page route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
          <Route path="/inquiry" element={<InquiryPage />} /> {/* Contact page route */}
        </Routes>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
