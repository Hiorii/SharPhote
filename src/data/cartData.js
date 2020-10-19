import  React, {useState} from 'react';
import localCart from '../utils/localCart';

export const CardData  = React.createContext();

const CardProvider = ({children}) => {
  const [cart, setCart] = useState(localCart);
  const [total, setTatal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  return (
    <CardData.Provider value={{cart, total, cartItems}}>
      {children}
    </CardData.Provider>
  );
};

export default CardProvider;

