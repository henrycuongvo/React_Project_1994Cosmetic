import React from "react";
import * as S from "./styles";
import imgHomePage_1 from "../../assets/images/HomPage/HomePage_ImageAdvertise.png";
// import NewProductList from "../NewProductList";
function HomePage() {
  return (
    <S.HomePage>
      <S.WrapperImgAdvertise>
        <img src={imgHomePage_1} alt="img" />
      </S.WrapperImgAdvertise>
      {/* <S.NewProductList>{NewProductList()}</S.NewProductList> */}
    </S.HomePage>
  );
}
export default HomePage;
