import React from "react";
import styled from "styled-components";
const Block = styled.div`
  display: ${(props) => props.display};
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
  ...rest
}) => {
  const styleProps = {
    display,
    brRadius,
    shadow,
    margin,
    padding,
    color,
    lineHeight,
  };
  return (
    <Block as={tag} {...rest} {...styleProps}>
      {children}
    </Block>
  );
};
Container.defaultProps = {
  display: "block",
  brRadius: 0,
  shadow: "none",
  margin: 0,
  padding: 0,
  color: "#000",
  lineHeight: "24px",
  styleObj: {},
};
export default Container;
