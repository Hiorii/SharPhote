export function featureProducts(data){
  return data.filter(product => {
    return product.featured === true;
  });
}


