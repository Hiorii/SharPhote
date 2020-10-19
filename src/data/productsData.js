import React,{useState, useEffect} from 'react';
import axios from 'axios';
import url from '../utils/URL'
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
        setProducts(response.data);
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



