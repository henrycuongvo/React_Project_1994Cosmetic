import React from "react";
import * as S from "./styles";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
function Container() {
  return (
    <S.Container>
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </S.Container>
  );
}
export default Container;
