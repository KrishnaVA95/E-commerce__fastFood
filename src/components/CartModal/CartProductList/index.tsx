import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext/CartContext';

const CartProductList = () => {
  const { productsCart, currentCartValue, resetListCart }  = useContext(CartContext)

    return(
      <StyledCartProductList>
        <ul>
          {productsCart.map((product) => <CartProductCard key={product.id} product={product}/>)}
        </ul>

        <div className='totalBox'>
          <StyledParagraph>
            <strong>Total</strong>
          </StyledParagraph>
          <StyledParagraph className='total'>R$ {currentCartValue().toFixed(2)}</StyledParagraph>
        </div>
        <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={() => resetListCart()}>
          Remover todos
        </StyledButton>
      </StyledCartProductList>
    )
};

export default CartProductList;
