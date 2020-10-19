import React, {useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {ProductData} from '../../../data/productsData';
//import {CartData} from '../../../data/productsData';
import Loading from '../Loading/Loading';
import styles from  './Product.scss';
import global from '../../../styles/global.scss'

const ProductDetails = () => {
  const {id} = useParams();
  const history = useHistory();
  const {products} = useContext(ProductData);
  const product = products.find((singleProduct)=> singleProduct.id === parseInt(id));
  if(products.length === 0){
    return <Loading />

  } else {
    const {image, title, price, descipction} = product;
    return (
      <section className={styles.singleProduct}>
        <img src={image.url} alt={title} className={styles.singleProductImage}/>
        <article>
          <h1>{title}</h1>
          <h2>{price} zł</h2>
          <p>{descipction}</p>
          <button
            className={`${global.btn} + ${global.btnPrimary} + ${global.btnBlock}`}
            onClick={()=>{
              //add to cart
              history.push('/cart');
            }}>dodaj do koszyka</button>
        </article>
      </section>
    )
  }
};

export default ProductDetails;
