import React from 'react';
import ProductData from './ProductData';
import './ProductDetail.css';


const ProductDetail = () => {
  
  const product = {
    name: 'Bolsas de Papel',
    description: 'Kraft N°7',
    price: 2050.00,
    sku: 'SKU123',
    availableQuantity: 50
  };

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <ProductData
        name={product.name}
        description={product.description}
        price={product.price}
        sku={product.sku}
        availableQuantity={product.availableQuantity}
      />
    </div>
  );
};

export default ProductDetail;
