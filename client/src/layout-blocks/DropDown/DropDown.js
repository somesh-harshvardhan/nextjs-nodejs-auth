import React, { useState } from "react";
import styled from "styled-components";
import FlexBox from "../FlexBox";
import Text from "../Text";
const DropdownBlock = styled.div`
  position: relative;
  ${props=>props.blockStyleObj}
`;
const DropDownHeader = styled.div`
  border: ${(props) => props.enableBorder && "1px solid black"};
  background: ${(props) => props.backGround};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  ${props=>props.headerStyleObj}
  cursor: pointer;
`;
const DropDownBody = styled.div`
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  height: ${(props) => props.bodyHeight};
  width: ${(props) => props.bodyWidth};
  background: ${(props) => props.bodyBackground};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  ::before{
    content: '';
    width: 10px;
    height: 10px;
    background-color: white;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: rotate(45deg);
    -ms-transform: translate(-50%,-50%);
    z-index: 10;
  }
`;
const DropDown = ({
  header,
  bodyContent = [],
  height,
  width,
  enableBorder,
  padding,
  margin,
  color,
  backGround,
  bodyHeight,
  bodyWidth,
  bodyBackground,
  dropDownBodyItemHeight = "auto",
  dropDownBodyItemPaddingY = "0",
  dropDownBodyItemPaddingX = "0",
  dropDownBodyItemMarginY = "0",
  dropDownBodyItemMarginX = "0",
  headerStyleObj,
  blockStyleObj,
  hover=false,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon } = rest;
  const headerStyleProps = {
    height,
    width,
    enableBorder,
    padding,
    margin,
    backGround,
    color,
    headerStyleObj,
  };
  const bodyContentStyleProps = {
    bodyHeight,
    bodyWidth,
    bodyBackground,
  };
  const dropDownItemStyleObj = {
    padding: `${dropDownBodyItemPaddingY} ${dropDownBodyItemPaddingX}`,
    margin: `${dropDownBodyItemMarginY} ${dropDownBodyItemMarginX}`,
    "border-bottom" : "1px solid #f0f0f0",
    "cursor" : "pointer",
  };
  const iconStyleOBj ={
  marginRight : '4px',
  transform : isHovered ? `rotate(180deg)` : 'rotate(0)',
  transition : 'all .1s ease',
  display : 'flex',
  "align-items" : "center",
  "justify-content" : "center"
}
  
  return (
    <DropdownBlock
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      blockStyleObj={blockStyleObj}
    >
      <DropDownHeader {...headerStyleProps}>
        {Icon && <Text styleObj={iconStyleOBj} color="#fff"><Icon/></Text> } {header}
      </DropDownHeader>
      {isHovered && (
        <DropDownBody {...bodyContentStyleProps}
         >
          {bodyContent.map((body) => (
            <FlexBox
              key={body}
              height={dropDownBodyItemHeight}
              styleObj={dropDownItemStyleObj}
              hover={hover}
            >
              {body}
            </FlexBox>
          ))}
        </DropDownBody>
      )}
    </DropdownBlock>
  );
};
DropDown.defaultProps = {
  height: "auto",
  width: "auto",
  enableBorder: false,
  padding: "5px 10px",
  margin: "auto",
  backGround: "#fff",
  bodyHeight: "auto",
  bodyWidth: "250px",
  bodyBackground: "#fff",
  color: "#000",
  headerStyleObj : {},
  blockStyleObj : {}
};

export default DropDown;
