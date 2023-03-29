import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext/CartContext';
// import { iItemShop } from '../../../providers/ShopContext/types';


const ProductCard = ({ product }: any ) => {
  const { addProductToListCart } = useContext(CartContext)
  return(
  <StyledProductCard key={product.id}>
    <div className='imageBox'>
      <img src={product.img} alt='Hamburguer' />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>{product.name}</StyledTitle>
      <StyledParagraph className='category'>{product.category}</StyledParagraph>
      <StyledParagraph className='price'>R$ {product.price.toFixed(2)}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green' 
        onClick={() => addProductToListCart(product)}>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
)};

export default ProductCard;
