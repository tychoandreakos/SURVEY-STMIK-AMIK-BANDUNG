import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import AuthWrapper from "../Util/AuthWrapper";
import TextBox from "../Util/TextBox";

import { SIGNUP } from "../../util/route";
import { Helmet } from "react-helmet";

const Login = () => {
  const footer = useMemo(() => {
    return (
      <p>
        Don't have an account?{" "}
        <Link className='redirect' to={SIGNUP}>
          Sign up
        </Link>
        .
      </p>
    );
  }, []);

  const header = useMemo(() => {
    return (
      <Helmet title={process.env.REACT_APP_NAME + " - Login"}>
        <meta charSet='utf-8' />
        <link rel='canonical' />
      </Helmet>
    );
  }, []);

  return (
    <>
      <AuthWrapper
        method='login'
        formSize={2}
        footer={footer}
        btnTitle='Log in'
      >
        <TextBox placeholder='E-mail address' name='email' type='text' />
        <TextBox placeholder='Your Password' name='password' type='password' />
      </AuthWrapper>
      {header}
    </>
  );
};

export default Login;
