import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "../layout-blocks/Container";
import DropDown from "../layout-blocks/DropDown/DropDown";
import FlexBox from "../layout-blocks/FlexBox";
import Link from "next/link";
import { getUserProfile } from "../utils";
const loginButtonStyleObj = {
  background: "#FFF",
  padding: "2px 20px",
  cursor: "pointer",
  color: "var(--primary-blue)",
  fontWeight: "500",
  cursor: "pointer",
  textDecoration : 'none'
};
const styleObjContainer = {
  columnGap: "24px",
  alignSelf: "stretch",
};
const styleObjNav = {
  color: "#FFF",
  cursor: "pointer",
};
const dropDownHeaderStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const blockStyleObj = {
  alignItems: "stretch",
  display: "flex",
};

const LoginButton = (props) => (
  <FlexBox alignItems="center" justify="center">
    <Link href="/signin">
      <a>
        <FlexBox styleObj={loginButtonStyleObj}>{props.header}</FlexBox>
      </a>
    </Link>
  </FlexBox>
)
const NavItems = () => {
  const user = getUserProfile();
  const dropDownProps = {
    color: "#fff",
    backGround: "transparent",
    bodyBackground: "#fff",
    headerStyleObj: dropDownHeaderStyleObj,
    dropDownBodyItemPaddingY: "8px",
    blockStyleObj: blockStyleObj,
    hover: true,
  };

  const loginProps = {};
  const navMenus = [
    {
      title: user ? user.user_name : "Login",
      icon: null,
      props: loginProps,
      customComponent: LoginButton,
    },
    {
      title: "Become a seller",
      icon: null,
      customComponent: null,
      styleoverride: {},
    },
    {
      title: "More",
      icon: IoIosArrowDown,
      props: dropDownProps,
      customComponent: DropDown,
      styleoverride: {},
      bodyContent: [
        "Notification Preferences",
        "Notification Preferences",
        "Notification Preferences",
        "Notification Preferences",
        "Notification Preferences",
      ],
    },
    {
      title: "Cart",
      icon: AiOutlineShoppingCart,
      customComponent: null,
      styleoverride: {},
    },
  ];

  return (
    <Container display="flex" align="stretch" styleObj={styleObjContainer}>
      {navMenus.map((navitem) => {
        if (navitem.customComponent) {
          return (
            <navitem.customComponent
              key={navitem.title}
              header={navitem.title}
              bodyContent={navitem.bodyContent}
              Icon={navitem.icon}
              {...navitem.props}
            />
          );
        }

        return (
          <FlexBox
            key={navitem.title}
            alignItems="center"
            justify="center"
            styleObj={styleObjNav}
          >
            {" "}
            {navitem.icon && <navitem.icon style={{ marginRight: 4 }} />}{" "}
            {navitem.title}
          </FlexBox>
        );
      })}
    </Container>
  );
};

export default NavItems;
