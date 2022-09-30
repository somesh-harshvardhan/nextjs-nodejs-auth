import React from "react";
import { Field } from "formik";
import FlexBox from "../FlexBox";

const FormInput = ({
  children,
  name,
  type = "input",
  placeHolder = "",
  as,
  label,
  labelclass = "",
  containerClass="",
  ...rest
}) => {
  if (as) {
    return (
      <FlexBox direction="column" className={containerClass}>
        {label && <label labelclass={labelclass}>{label}</label>}
        <Field name={name} as={as} placeholder={placeHolder} {...rest}>
          {children}
        </Field>
      </FlexBox>
    );
  } else {
    return (
      <FlexBox direction="column"  className={containerClass}>
        {label && <label labelclass={labelclass}>{label}</label>}
        <Field name={name} type={type} placeholder={placeHolder} {...rest} />
      </FlexBox>
    );
  }
};

export default FormInput;
