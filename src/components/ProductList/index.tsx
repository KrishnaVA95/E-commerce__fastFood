import { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ShopContext } from '../../providers/ShopContext/ShopContext';

const ProductList = () => {
  const { products, renderListProducts, searchProductList } = useContext(ShopContext)

  useEffect(() =>{
    async function call(){
      await renderListProducts()
    }
    call()
  },[])

    return(
      <StyledProductList>
        {
          searchProductList?.map((product) =>
            <ProductCard key={product.id} product={product} />
          )
        }
      </StyledProductList>
    )
};

export default ProductList;
