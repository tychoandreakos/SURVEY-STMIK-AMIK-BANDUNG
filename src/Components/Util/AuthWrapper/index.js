import React, { useState, useMemo } from "react";

import Icon from "@iconify/react";
import FingerPrint from "@iconify/icons-mdi/fingerprint";
import ButtonSubmit from "../ButtonSubmit";

import "./style.scss";

const AuthWrapper = (props) => {
  const { children, footer, btnTitle, term = false } = props;
  const [validation, setValidation] = useState(false);
  const termRender = useMemo(() => {
    if (term) {
      return (
        <p className='term'>
          By creating an account, you agree and accept our{" "}
          <span className='term-link'>Terms</span> and{" "}
          <span className='term-link'>Policy</span>
        </p>
      );
    }
  }, [term]);

  const validationRender = useMemo(() => {
    if (validation) {
      return (
        <div className='validation'>
          <ul>
            <li>Username / password Wrong!</li>
            <li>Please enter 8 character</li>
          </ul>
        </div>
      );
    }

    return [];
  }, [validation]);

  const validationHandler = () => {
    setValidation(!validation);
  };

  return (
    <div className='auth'>
      <div className='auth-wrapper'>
        <div className='icon'>
          <Icon icon={FingerPrint} />
        </div>
        <div className='form'>
          {children}
          {validationRender}
          <ButtonSubmit title={btnTitle} />
          {termRender}
        </div>
        <div className='footer'>{footer}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
