import React from "react";
import { Form, Formik } from "formik";
import FormInput from "../layout-blocks/Form/FormInput";
import styled from "styled-components";
import {IoSearch} from 'react-icons/io5';
import FlexBox from "../layout-blocks/FlexBox";

const FormStyled = styled(Form)`
position: relative;
.search-icon{
    height: 20px;
    width: 20px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: var(--primary-blue);
    cursor: pointer;
}
`

const Search = () => {
    const style={
        padding : "8px 10px",
        width  : '500px',
        outline : 'none',
        borderRadius : '4px',
        border: 'none'
    }
  return (
    <Formik initialValues={{ searchInput: "" }}>
        <FormStyled>
          <FlexBox>
          <FormInput  name="searchInput" type="input" placeHolder="Search for products,brands and more" style={style}/>
          <IoSearch className="search-icon"/>
          </FlexBox>
        </FormStyled>
    </Formik>
  );
};

export default Search;
