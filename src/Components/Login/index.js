import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import AuthWrapper from "../Util/AuthWrapper";
import TextBox from "../Util/TextBox";

import { SIGNUP } from "../../util/route";

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

  const onSubmit = () => {
    console.log("damn you login");
  };

  return (
    <AuthWrapper
      method='login'
      onSubmit={onSubmit}
      formSize={2}
      footer={footer}
      btnTitle='Log in'
    >
      <TextBox placeholder='E-mail address' name='email' type='text' />
      <TextBox placeholder='Your Password' name='password' type='password' />
    </AuthWrapper>
  );
};

export default Login;
