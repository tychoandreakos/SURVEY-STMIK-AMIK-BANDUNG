import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import TextBox from "../Util/TextBox";
import AuthWrapper from "../Util/AuthWrapper";
import { LOGIN } from "../../util/route";
import { Helmet } from "react-helmet";

const SignUp = (props) => {
  const footer = useMemo(() => {
    return (
      <p>
        Already have an account?{" "}
        <Link className='redirect' to={LOGIN}>
          Log in
        </Link>
        .
      </p>
    );
  }, []);

  const header = useMemo(() => {
    return (
      <Helmet title={process.env.REACT_APP_NAME + " - Sign Up"}>
        <meta charSet='utf-8' />
        <link rel='canonical' />
      </Helmet>
    );
  }, []);

  return (
    <>
      <AuthWrapper
        method='signup'
        term={true}
        footer={footer}
        btnTitle='Sign up'
        formSize={3}
      >
        <TextBox placeholder='Your Name' name='name' type='text' />
        <TextBox placeholder='E-mail address' name='email' type='text' />
        <TextBox placeholder='Your Password' name='password' type='password' />
      </AuthWrapper>
      {header}
    </>
  );
};

export default SignUp;
