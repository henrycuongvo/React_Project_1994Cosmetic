import React from "react";
import { Input } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import * as S from "./styles";

function Header() {
  //List Item
  const listNavigation = [
    "Trang Chủ",
    "Sản Phẩm",
    "Hàng Mới Về",
    "Thương Hiệu",
    "Khuyến Mãi",
    "Liên Hệ",
  ];
  const newListNavigation = listNavigation.map((item) => {
    return <S.Item>{item}</S.Item>;
  });

  return (
    <S.HeaderContainer>
      <S.WrapperContainer>
        <S.HeaderTitle>
          <img src={logo} alt="logo" />
        </S.HeaderTitle>

        {/*This is header content section*/}
        <S.HeaderContent>
          <S.WrapperContent>
            <S.WrapperInput>
              <Input
                style={{ width: "400px", height: "30px", marginLeft: "20px" }}
                placeholder=" Bạn cần tìm gì..."
              />
            </S.WrapperInput>

            {/* This is top header section on the right */}
            <S.WrapperHeaderItem>
              <S.Cart>
                <S.CartLogo>
                  <ShoppingCartOutlined />
                </S.CartLogo>
                <S.WrapperCartItem>
                  <S.CartItem> Giỏ Hàng</S.CartItem>
                  <S.CartItem>0đ</S.CartItem>
                </S.WrapperCartItem>
              </S.Cart>
              <S.Login>
                <S.LoginLogo>
                  {" "}
                  <UserOutlined />
                </S.LoginLogo>
                <S.WrapperLogin>
                  <S.LoginItem> Tài Khoản</S.LoginItem>
                  <S.LoginItem>Đăng Nhập / Đăng Ký</S.LoginItem>
                </S.WrapperLogin>
              </S.Login>
            </S.WrapperHeaderItem>
          </S.WrapperContent>

          {/*This is list item Navigation*/}
          <S.ListItem>{newListNavigation}</S.ListItem>
        </S.HeaderContent>
      </S.WrapperContainer>
    </S.HeaderContainer>
  );
}
export default Header;
