import React, { useState, useMemo, useEffect } from "react";

import { connect } from "react-redux";
import Icon from "@iconify/react";
import FingerPrint from "@iconify/icons-mdi/fingerprint";
import ButtonSubmit from "../ButtonSubmit";

import "./style.scss";
import { AUTH_FORM } from "../../../util/varTypes";
import { signUp } from "../../../Store/redux/action";

const AuthWrapper = (props) => {
  const {
    children,
    footer,
    btnTitle,
    term = false,
    authForm,
    formSize,
    signUp,
  } = props;
  const [validation, setValidation] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [sendForm, setSendForm] = useState({});
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

  const onSubmit = () => {
    signUp({
      name: "dani eka",
      email: "danieka1234@protonmail.com",
      password: "123456575",
    });
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
          <ButtonSubmit
            disabled={btnDisabled}
            onSubmit={onSubmit}
            title={btnTitle}
          />
          {termRender}
        </div>
        <div className='footer'>{footer}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authForm: state[AUTH_FORM],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (item) => dispatch(signUp(item)),
  };
};

const AuthWrapperJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWrapper);

export default AuthWrapperJoinRedux;
