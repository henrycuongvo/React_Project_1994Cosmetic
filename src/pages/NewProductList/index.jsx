import React from "react";
import { Card } from "antd";
import cilinnaImg from "../../assets/images/NewProduct/Cilinna.png";
import glaciersImg from "../../assets/images/NewProduct/glaciers.png";
import milemskiiantiagingImg from "../../assets/images/NewProduct/milemskiiantiaging.png";
import PhysiodermieImg from "../../assets/images/NewProduct/Physiodermie.png";
import * as S from "./styles";
const { Meta } = Card;
function NewProductList() {
  return (
    <S.WrapperCard>
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
    </S.WrapperCard>
  );
}
export default NewProductList;
