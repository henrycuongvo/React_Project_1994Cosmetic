import React from "react";
import * as S from "./styles";
import {
  PhoneOutlined,
  MailOutlined,
  FieldTimeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
// import phoneIcon from "../../assets/images/phoneIcon.png";

function Footer() {
  return (
    <S.Footer>
      <S.WrapperFooter>
        <S.FooterContent>
          <S.FooterTitle>1994 COSMETIC</S.FooterTitle>
          <S.WrapperFooterItem>
            <S.FooterItem>
              <PhoneOutlined />
              Hotline: 0858.222.247
            </S.FooterItem>
            <S.FooterItem>
              <MailOutlined />
              Email: cuongvoquocc@gmail.com
            </S.FooterItem>
            <S.FooterItem>
              <FieldTimeOutlined />
              Thời gian mở cửa: T2-CN: 8AM - 8PM
            </S.FooterItem>
          </S.WrapperFooterItem>
        </S.FooterContent>

        <S.FooterContact>
          <S.FooterItem>
            <FacebookOutlined style={{ fontSize: "30px" }} />
            <InstagramOutlined style={{ fontSize: "30px" }} />
          </S.FooterItem>
          <S.FooterItem> Điều khoản sử dụng</S.FooterItem>
          <S.FooterItem>Chính sách bảo mật</S.FooterItem>
          <S.FooterItem> Liên hệ</S.FooterItem>
        </S.FooterContact>
      </S.WrapperFooter>

      <S.WrapperFooterSlogan>
        <S.FooterSlogan>
          <CopyrightOutlined />
          1994 COSMETIC - Uy tín làm nên thương hiệu
        </S.FooterSlogan>
      </S.WrapperFooterSlogan>
    </S.Footer>
  );
}
export default Footer;
