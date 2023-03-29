import styled from "styled-components";

export const StyledCartProductCard = styled.li`
   display: flex;
   align-items: center;
   gap: 10px;

   .imageBox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background: ${({ theme }) => theme.colors.gray100};

      img {
         width: 80px;
         height: 80px;
         object-fit: contain;
      }

      @media (max-width: 450px){
         width: 40px;
         height: 40px;
         
         img{
            width: 40px;
            height: 40px;
         }
      }
   }

   .contentBox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      gap: 20px;

      .container__adjust--quantity{
         display: flex;
         gap: 15px;

         button{
            width: 25px;
            height: 25px;
            border: 1px solid;
            border-radius: 100%;
            background-color: #000;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
         }
      }

      button{
        background: transparent;
        opacity: .4;
        transition: .4s;

        :hover{
            opacity: .7;
        }
      }
   }
`;
