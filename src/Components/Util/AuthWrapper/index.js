import React from "react";

import Icon from "@iconify/react";
import FingerPrint from "@iconify/icons-mdi/fingerprint";

import "./style.scss";

const AuthWrapper = (props) => {
  const { children, footer } = props;
  return (
    <div className='auth'>
      <div className='auth-wrapper'>
        <div className='icon'>
          <Icon icon={FingerPrint} />
        </div>
        <div className='form'>{children}</div>
        <div className='footer'>{footer}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
