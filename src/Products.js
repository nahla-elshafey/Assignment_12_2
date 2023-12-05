import React, { useState } from 'react';
import Filter from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

const PRODUCTS = {
  '1': { id: 1, category: 'Music', price: '$459.99', name: 'Clarinet' },
  '2': { id: 2, category: 'Music', price: '$5,000', name: 'Cello' },
  '3': { id: 3, category: 'Music', price: '$4,500', name: 'Tuba' },
  '4': { id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge' },
  '5': { id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table' },
  '6': { id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag' },
};

const Products = () => {
  // State for filter text
  const [filterText, setFilterText] = useState('');
  // State for products
  const [products, setProducts] = useState({ ...PRODUCTS });

  // Handler for updating filter text state
  const handleFilter = (text) => {
    setFilterText(text);
  };

  // Handler for saving a new product
  const handleSave = (product) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [product.id]: product,
    }));
  };

  // Handler for deleting a product
  const handleDestroy = (productId) => {
    setProducts((prevProducts) => {
      const newProducts = { ...prevProducts };
      delete newProducts[productId];
      return newProducts;
    });
  };

  return (
    <div className="container mt-5">
      <h1 classname="text-center">Inventory Management System</h1>
      <h2>My Inverntory</h2>{/* Pass filterText and handleFilter to Filter */}
        <div className="row">
            <div className="col-md-6">
                <Filter filterText={filterText} onFilter={handleFilter} />
                {/* Pass products, filterText, and handleDestroy to ProductTable */}
                <ProductTable products={products} filterText={filterText} onDestroy={handleDestroy} />
                {/* Pass handleSave to ProductForm */}
                <ProductForm onSave={handleSave} />
            </div>
        </div>
    </div>

  );
};

export default Products;
