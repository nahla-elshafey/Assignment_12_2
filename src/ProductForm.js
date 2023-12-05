// src/components/ProductForm.js
import React, { useState } from 'react';

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

const ProductForm = ({ onSave }) => {
  const [product, setProduct] = useState({ ...RESET_VALUES });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(product);
    setProduct({ ...RESET_VALUES });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '10px' }}>Enter a new Product</h2>
      <form>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={product.name} />
        </div>

        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="category">Category:</label>
          <input type="text" className="form-control" id="category" name="category" onChange={handleChange} value={product.category} />
        </div>

        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="price">Price:</label>
          <input type="text" className="form-control" id="price" name="price" onChange={handleChange} value={product.price} />
        </div>

        <button className="btn btn-info" type="submit" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default ProductForm;
