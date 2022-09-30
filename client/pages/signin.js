import React, { useEffect } from "react";
import FlexBox from "../src/layout-blocks/FlexBox";
import { setCookie } from "cookies-next";
import Layout from "../src/layout/Layout";
import LoginSvg from "../src/svg/LoginSvg";
import Text from "../src/layout-blocks/Text";
import { Form, Formik } from "formik";
import FormInput from "../src/layout-blocks/Form/FormInput";
import styles from "./../src/css/sign-in.module.css";
import axios from 'axios';
import { BASE_URL, signInUrl } from "../src/constants";

const loginAboutStyleObj = {
  flexBasis: "40%",
  background: "var(--primary-blue)",
  padding: "12px 24px",
  paddingTop: "32px",
};
const loginContainerStyleObj = {
  boxShadow: "0 0 7px rgba(0,0,0,.3)",
};
const loginFieldStyleObj = {
  flexBasis: "60%",
  padding: "32px 24px",
  paddingTop: "64px",
};
const SignIn = () => {
  const handleSubmit = async (values) => {
    const res = await axios.post(signInUrl(),{
      email : values.email,
      password : values.password
    })
    console.log(res.data)
  };
  return (
    <Layout>
      <FlexBox
        minHeight="calc(100vh - 60px)"
        justify={"center"}
        alignItems="center"
      >
        <FlexBox
          height="528px"
          width="850px"
          justify="flex-start"
          alignItems="stretch"
          styleObj={loginContainerStyleObj}
        >
          <FlexBox
            styleObj={loginAboutStyleObj}
            height="100%"
            direction="column"
          >
            <Text tag="h3" size="32px" weight="800" color="white">
              Login
            </Text>
            <Text tag="p" textAlign="start" margin="30px 0" color="white">
              Get access to multiple benefits on signing in and More !
            </Text>
            <LoginSvg width="100%" height="100%" />
          </FlexBox>
          <FlexBox
            direction="column"
            height="100%"
            styleObj={loginFieldStyleObj}
            justify="flex-start"
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
            >
              <Form className={styles.signinForm}>
                <FormInput
                  type="email"
                  name="email"
                  className={styles.formInputStyle}
                  label="Enter Email"
                />
                <FormInput
                  type="password"
                  name="password"
                  className={styles.formInputStyle}
                  containerClass="mt32"
                  label="Enter Password"
                />
                <button className={styles.loginButton} type="submit">Login</button>
              </Form>
            </Formik>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};

export default SignIn;
