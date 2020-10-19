import React,{useState, useEffect} from 'react';
import axios from 'axios';
import url from '../utils/URL'
import {featureProducts} from '../utils/helpers';

export const ProductData = React.createContext();

const ProductsProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [featuredProducts, setFeaturedProducts ] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    setLoading(true);
    axios
      .get(`${url}/products`)
      .then(response => {
        const featured = featureProducts(response.data);
        setProducts(response.data);
        setFeaturedProducts(featured);
        setLoading(false);
      });
      return () => {}
  },[]);

  return (
    <div>
      <ProductData.Provider value={{products, featuredProducts, loading}}>
        {children}
      </ProductData.Provider>
    </div>
  );
};

export default ProductsProvider;
