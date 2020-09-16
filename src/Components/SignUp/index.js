import React from "react";

import Icon from "@iconify/react";
import FingerPrint from "@iconify/icons-mdi/fingerprint";
import TextBox from "../Util/TextBox";
import ButtonSubmit from "../Util/ButtonSubmit";

const MainSignUp = () => {
  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <div className='icon'>
          <Icon icon={FingerPrint} />
          <div className='form'>
            <TextBox placeholder='Your Name' name='name' type='text' />
            <TextBox placeholder='Your Email' name='email' type='text' />
            <TextBox
              placeholder='Your Password'
              name='password'
              type='password'
            />
            <ButtonSubmit />
            <p>
              By creating an account, you agree and accept our{" "}
              <span>terms</span> and <span>privacy policy</span>
            </p>
          </div>
          <div className='footer'>
            <p>
              Already have an account? <span>Log in</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSignUp;
