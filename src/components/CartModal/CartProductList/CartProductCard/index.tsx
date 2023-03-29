import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { iItemCart } from '../../../../providers/CartContext/types';
import { CartContext } from '../../../../providers/CartContext/CartContext';

const CartProductCard = ({product}: any) => {
  const { removeProductFromListCart, sunCurrentQuantity, restCurrentQuantity } = useContext(CartContext)

    return(
      <StyledCartProductCard>
        <div className='imageBox'>
          <img src={product.img} alt={product.name} />
        </div>
        <div className='contentBox'>
          <StyledTitle tag='h3' $fontSize='three'>
            {product.name}

            <div className='container__adjust--quantity'>
              <button type='button' onClick={() => sunCurrentQuantity(product.id)} >+</button>
              <div>{product.quantity}</div>
              <button type='button'  onClick={() => restCurrentQuantity(product.id)}>-</button>
            </div>
          </StyledTitle>
          <button type='button' aria-label='Remover' onClick={() => removeProductFromListCart(product.id)}>
            <MdDelete size={24} />
          </button>

        </div>
      </StyledCartProductCard>
   )
};

export default CartProductCard;
