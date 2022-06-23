import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  width: 100%;
  background-color: #f7fbff;
`;
export const WrapperContainer = styled.div`
  width: 1280px;
  margin: auto;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HeaderTitle = styled.div`
  color: #a46497;
  font-size: 30px;
  font-weight: bold;
  font-family: Montserrat, Sans-serif;
  display: flex;
  max-width: 20%;
  position: absolute;
  top: 5px;
  left: 100px;

  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WrapperInput = styled.div`
  width: 40%;
  position: relative;
  left: 100px;
  Input {
    height: 40px;
    border-radius: 10px;
    border: transparent;
    background-color: #e9edf0;
  }
`;
export const WrapperHeaderItem = styled.div`
  width: 50%;
  display: flex;
  display: flex;
  flex-direction: row-reverse;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 50%;
  padding: 0 20px 0 20px;
  margin: auto;
  position: relative;
  top: 60px;
`;
export const Item = styled.div`
  font-size: 16px;
`;
export const LogoImg = styled.img`
  width: 100%;
`;
export const Login = styled.div`
  display: flex;
`;
export const LoginLogo = styled.div`
  font-size: 35px;
  padding-right: 5px;
`;
export const WrapperLogin = styled.div`
  padding-right: 10px;
`;
export const LoginItem = styled.div`
  font-size: 15px;
`;
export const Cart = styled.div`
  display: flex;
`;
export const CartLogo = styled.div`
  font-size: 35px;
  padding-right: 5px;
`;
export const WrapperCartItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CartItem = styled.div`
  font-size: 15px;
`;
