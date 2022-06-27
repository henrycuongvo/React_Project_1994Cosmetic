import React from "react";
import { Card } from "antd";
import Slider from "react-slick";

import cilinnaImg from "../../assets/images/NewProduct/Cilinna.png";
import glaciersImg from "../../assets/images/NewProduct/glaciers.png";
import milemskiiantiagingImg from "../../assets/images/NewProduct/milemskiiantiaging.png";
import PhysiodermieImg from "../../assets/images/NewProduct/Physiodermie.png";
import * as S from "./styles";
const { Meta } = Card;
function NewProductList() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 1000,
    nav1: null,
    nav2: null,
  };
  return (
    <S.NewProduct>
      <S.NewProductTitle>
        {" "}
        <h2> SẢN PHẨM MỚI</h2>
        <span> xem thêm </span>
        <div>
          <Slider {...settings}>
            <div>
              <img style={{ width: "50%" }} src={cilinnaImg} alt="cilinnaImg" />
            </div>
            <div>
              <img
                style={{ width: "50%" }}
                src={glaciersImg}
                alt="glaciersImg"
              />
            </div>
            <div>
              <img
                style={{ width: "50%" }}
                src={milemskiiantiagingImg}
                alt="milemskiiantiagingImg"
              />
            </div>
            <div>
              <img
                style={{ width: "50%" }}
                src={PhysiodermieImg}
                alt="PhysiodermieImg"
              />
            </div>
          </Slider>
        </div>
      </S.NewProductTitle>

      {/* <S.WrapperCard>
        <Card style={{ width: "300px" }}>
          <img
            alt="example"
            src={cilinnaImg}
            style={{ width: "300px", height: "350px" }}
          />
          <Meta
            style={{
              width: "300px",
            }}
            title="IS CLINICAL Brightening Complex - Kem dưỡng trắng trị đốm nâu"
            description="2.500.000vnd"
          />
        </Card>
        <Card style={{ width: "300px" }}>
          <img
            alt="example"
            src={glaciersImg}
            style={{ width: "300px", height: "350px" }}
          />
          <Meta
            style={{
              width: "300px",
            }}
            title="IS CLINICAL Brightening Complex - Kem dưỡng trắng trị đốm nâu"
            description="1.900.000vnd"
          />
        </Card>
        <Card style={{ width: "300px" }}>
          <img
            alt="example"
            src={milemskiiantiagingImg}
            style={{ width: "300px", height: "350px" }}
          />
          <Meta
            style={{
              width: "300px",
            }}
            title="IS CLINICAL Brightening Complex - Kem dưỡng trắng trị đốm nâu"
            description="500.000vnd"
          />
        </Card>
        <Card style={{ width: "300px" }}>
          <img
            alt="example"
            src={PhysiodermieImg}
            style={{ width: "300px", height: "350px" }}
          />
          <Meta
            style={{
              width: "300px",
            }}
            title="PHYSIODERMIE Shower Hydrating Milk SL"
            description="2.000.000vnd"
          />
        </Card>
      </S.WrapperCard> */}
    </S.NewProduct>
  );
}
export default NewProductList;
