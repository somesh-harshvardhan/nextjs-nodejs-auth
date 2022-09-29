import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "../layout-blocks/Container";
import DropDown from "../layout-blocks/DropDown/DropDown";
import FlexBox from "../layout-blocks/FlexBox";

const NavItems = () => {
  const navMenus = [
    {
      title: "Become a seller",
      icon: null,
      customComponent: null,
      styleoverride: {},
    },
    {
      title: "More",
      icon: IoIosArrowDown,
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
  const styleObjContainer = {
    "column-gap": "24px",
    "align-self" : "stretch"
  };
  const styleObjNav = {
    color: "#FFF",
    cursor: "pointer",
  };
  const dropDownHeaderStyleObj = {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
   
  };
  const blockStyleObj = { 
    "align-items" : "stretch",
    "display" : "flex"
  }
  return (
    <Container display="flex" align="stretch" styleObj={styleObjContainer}>
      {navMenus.map((navitem) => {
        if (navitem.customComponent)
          return (
            <navitem.customComponent
              key={navitem}
              header={navitem.title}
              bodyContent={navitem.bodyContent}
              color="#fff"
              backGround="transparent"
              bodyBackground="#fff"
              Icon={navitem.icon}
              headerStyleObj={dropDownHeaderStyleObj}
              dropDownBodyItemPaddingY="8px"
              blockStyleObj={blockStyleObj}
              hover
            />
          );
        return (
          <FlexBox
            key={navitem.title}
            alignItems="center"
            justify="center"
            styleObj={styleObjNav}
          >
            {" "}
            {navitem.icon && <navitem.icon />} {navitem.title}
          </FlexBox>
        );
      })}
    </Container>
  );
};

export default NavItems;
