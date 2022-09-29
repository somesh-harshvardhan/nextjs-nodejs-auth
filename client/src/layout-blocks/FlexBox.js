import React from "react";
import styled,{css}from "styled-components";


const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  justify-content: ${props=>props.justify};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.brRadius};
  box-shadow: ${(props) => props.shadow};
  min-height: ${(props) => props.minHeight};
  ${props=>props.hover && css`
    :hover{
      background-color: rgba(0,0,0,.04);
    }
   `}
  ${(props) => props.styleObj};
`;

const FlexBox = ({
  children,
  tag = "div",
  height,
  width,
  direction,
  alignItems,
  textAlign,
  brRadius,
  shadow,
  minHeight,
  justify,
  styleObj,
  hover,
  ...rest
}) => {
  const styleProps = {
    height,
    width,
    direction,
    alignItems,
    textAlign,
    brRadius,
    shadow,
    minHeight,
    justify,
    hover
  };
  return (
    <Flex styleObj={styleObj} as={tag} {...rest} {...styleProps}>
      {children}
    </Flex>
  );
};

FlexBox.defaultProps = {
  height: 'auto',
  width: 'auto',
  direction: "row",
  alignItems: "flex-start",
  textAlign: "center",
  brRadius: 0,
  shadow: "none",
  minHeight: "auto",
  justify : 'center',
  styleObj: {},
  hover  :false
};
export default FlexBox;
