import { useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ShopContext } from '../../../providers/ShopContext/ShopContext';

const SearchForm = () => {
  const { setSearch } = useContext(ShopContext)
    return(
      <StyledSearchForm>
        <input type='text' placeholder='Digitar pesquisa' onChange={(e) => setSearch(e.target.value) }/>
        <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
          <MdSearch />
        </StyledButton>
      </StyledSearchForm>
    )
};

export default SearchForm;
