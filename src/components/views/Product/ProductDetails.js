import React from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
  return (
    <div>
      <p>Product id is {id} </p>
    </div>
  );
};

export default ProductDetails;
