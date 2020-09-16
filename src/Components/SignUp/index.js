import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import TextBox from "../Util/TextBox";
import AuthWrapper from "../Util/AuthWrapper";

import { LOGIN } from "../../util/route";

const SignUp = () => {
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
  return (
    <AuthWrapper term={true} footer={footer} btnTitle='Sign up'>
      <TextBox placeholder='Your Name' name='name' type='text' />
      <TextBox placeholder='E-mail address' name='email' type='text' />
      <TextBox placeholder='Your Password' name='password' type='password' />
    </AuthWrapper>
  );
};

export default SignUp;
