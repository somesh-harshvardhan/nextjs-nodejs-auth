import React from "react";
import styled from "styled-components";

const T = styled.div`
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.brRadius};
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  ${(props) => props.styleObj}
`;

const Text = ({
  children,
  tag = "span",
  textAlign,
  brRadius,
  shadow,
  margin,
  padding,
  color,
  lineHeight,
  size,
  weight,
  styleObj,
  ...rest
}) => {
const styleProps = {
    textAlign,
    brRadius,
    shadow,
    margin,
    padding,
    color,
    lineHeight,
    size,
    weight
}
  return (
    <T styleObj={styleObj} as={tag} {...rest} {...styleProps}>
      {children}
    </T>
  );
};
Text.defaultProps = {
  textAlign: "center",
  brRadius: 0,
  shadow: "none",
  margin: 0,
  padding: 0,
  color: "#000",
  lineHeight: "24px",
  size : "16px",
  weight : "400",
  styleObj: {},
};
export default Text;
