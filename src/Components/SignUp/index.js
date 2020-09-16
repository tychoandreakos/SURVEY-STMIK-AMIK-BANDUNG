import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import TextBox from "../Util/TextBox";
import ButtonSubmit from "../Util/ButtonSubmit";
import AuthWrapper from "../Util/AuthWrapper";

import { LOGIN } from "../../util/route";

const SignUp = () => {
  const footer = useMemo(() => {
    return (
      <p>
        Already have an account? <Link className="redirect" to={LOGIN}>Log in</Link>.
      </p>
    );
  }, []);
  return (
    <AuthWrapper footer={footer}>
      <TextBox placeholder='Your Name' name='name' type='text' />
      <TextBox placeholder='E-mail address' name='email' type='text' />
      <TextBox placeholder='Your Password' name='password' type='password' />
      <ButtonSubmit title='Log in' />
    </AuthWrapper>
  );
};

export default SignUp;
