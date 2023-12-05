import React from 'react';

const ProductRow = (props) => {
  const { product, onDestroy } = props;

  const destroy = () => {
    onDestroy(product.id);
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button className="btn btn-info" onClick={destroy}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
