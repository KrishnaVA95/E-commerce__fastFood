/* eslint-disable jsx-quotes */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledLoginPage } from './style';
import LoginForm from '../../components/Form/LoginForm';
import IllustrationBox from '../../components/IllustrationBox';

import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';


const LoginPage = () => (
  <StyledLoginPage>
    <StyledContainer>
      <div className='flexGrid'>
        <div className='left'>
          <StyledGridBox className='formBox'>
            <StyledTitle tag='h2' $fontSize='three'>
              Login
            </StyledTitle>
            <LoginForm />
            <StyledParagraph textAlign='center' fontColor='gray'>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </StyledParagraph>
            <StyledButtonLink
              to='/register'
              $buttonSize='default'
              $buttonStyle='gray'
            >
              Cadastrar
            </StyledButtonLink>
          </StyledGridBox>
        </div>
        <div className='right'>
          <IllustrationBox />
        </div>
      </div>
    </StyledContainer>

    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </StyledLoginPage>
);

export default LoginPage;
