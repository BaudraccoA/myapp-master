import React from 'react';

const ProductData = ({ name, description, price, sku, availableQuantity }) => {
  return (
    <>
      <h2>Nombre: {name} </h2>
      <p><strong>Descripcion:</strong> {description}</p>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Cantidad Disponible:</strong> {availableQuantity}</p>
    </>
  );
};

export default ProductData;
