import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

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
  ${(props) => props.styleObj}
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
    justify
  };
  return (
    <Flex styleObj={styleObj} as={tag} {...rest} {...styleProps}>
      {children}
    </Flex>
  );
};

FlexBox.defaultProps = {
  height: 100,
  width: 100,
  direction: "row",
  alignItems: "flex-start",
  textAlign: "center",
  brRadius: 0,
  shadow: "none",
  minHeight: "auto",
  justify : 'center',
  styleObj: {},
};
export default FlexBox;
