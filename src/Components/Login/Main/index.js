import React from "react";

import Icon from "@iconify/react";
import FingerPrint from "@iconify/icons-mdi/fingerprint";
import TextBox from "../../Util/TextBox";
import ButtonSubmit from "../../Util/ButtonSubmit";

import "./style.scss";

const MainLogin = () => {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='icon'>
          <Icon icon={FingerPrint} />
        </div>
        <div className='form'>
          <TextBox placeholder='E-mail address' name='email' type='text' />
          <TextBox
            placeholder='Your Password'
            name='password'
            type='password'
          />
          <ButtonSubmit title='Log in' />
        </div>
        <div className='footer'>
          <p>
            Don't have an account? <span>Sign up</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
