import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const { products, onDestroy, filterText } = props;

  const rows = [];
  Object.keys(products).forEach((productId) => {
    const product = products[productId];
    // Check if the product name contains the filter text
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
    rows.push(
      <ProductRow product={product} key={product.id} onDestroy={onDestroy} />
    );
  });

  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th></th> 
      </tr>
    </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
