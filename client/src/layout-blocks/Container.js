import React from "react";
import styled from "styled-components";
const Block = styled.div`
  display: ${(props) => props.display};
  align-items: ${props=>props.align};
  justify-content: ${props=>props.justify};
  border-radius: ${(props) => props.brRadius};
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  ${(props) => props.styleObj}
`;
const Container = ({
  children,
  tag = "div",
  brRadius,
  shadow,
  margin,
  padding,
  color,
  lineHeight,
  styleObj,
  display,
  align,
  justify,
  ...rest
}) => {
  const styleProps = {
    display,
    align,
    justify,
    brRadius,
    shadow,
    margin,
    padding,
    color,
    lineHeight,
    styleObj
  };
  return (
    <Block as={tag} {...rest} {...styleProps}>
      {children}
    </Block>
  );
};
Container.defaultProps = {
  display: "block",
  align : "center",
  justify : "flex-start",
  brRadius: 0,
  shadow: "none",
  margin: 0,
  padding: 0,
  color: "#000",
  lineHeight: "24px",
  styleObj: {},
};
export default Container;
