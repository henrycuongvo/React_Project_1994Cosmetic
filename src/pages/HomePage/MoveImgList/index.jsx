import React from "react";
import Slider from "react-slick";
import MoveImgList_1 from "../../../assets/images/HomPage/MoveImgList_1.png";
import MoveImgList_2 from "../../../assets/images/HomPage/MoveImgList_2.png";
import MoveImgList_3 from "../../../assets/images/HomPage/MoveImgList_3.png";
import MoveImgList_4 from "../../../assets/images/HomPage/MoveImgList_4.png";
// import * as S from "./style";

function ImgAction() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div style={{ maxWidth: "85%", margin: "auto" }}>
      <Slider {...settings}>
        <div>
          <img src={MoveImgList_1} alt="Img1" />
        </div>
        <div>
          <img src={MoveImgList_2} alt="Img2" />
        </div>
        <div>
          <img src={MoveImgList_3} alt="Img3" />
        </div>
        <div>
          <img src={MoveImgList_4} alt="Img4" />
        </div>
      </Slider>
    </div>
  );
}
export default ImgAction;
