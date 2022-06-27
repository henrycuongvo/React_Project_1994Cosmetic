import React from "react";
import * as S from "./styles";
import ImgAction from "./MoveImgList";
import NewProductList from "../NewProductList";
function HomePage() {
  return (
    <S.HomePage>
      <S.WrapperImgAdvertise>
        <ImgAction />
        <NewProductList />
      </S.WrapperImgAdvertise>
      {/* <S.NewProductList>{NewProductList()}</S.NewProductList> */}
    </S.HomePage>
  );
}
export default HomePage;
