import React, { useState, useMemo, useEffect, useCallback } from "react";

import { connect } from "react-redux";
import Icon from "@iconify/react";
import FingerPrint from "@iconify/icons-mdi/fingerprint";
import ButtonSubmit from "../ButtonSubmit";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

import "./style.scss";
import { AUTH_FORM, AUTH_MESSAGE, AUTH_STATUS } from "../../../util/varTypes";
import { login, signUp } from "../../../Store/redux/action";
import { HOME_DASHBOARD } from "../../../util/route";

const AuthWrapper = (props) => {
  const {
    children,
    footer,
    btnTitle,
    term = false,
    authForm,
    formSize,
    signUp,
    success,
    failed,
    history,
    method,
    login,
  } = props;
  const [validation, setValidation] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [save, setSave] = useState(false);
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

  const validationCallback = useCallback(
    (status) => {
      setValidation(status);
    },
    [setValidation]
  );

  useEffect(() => {
    if (failed.length >= 1) {
      validationCallback(true);
    } else {
      validationCallback(false);
    }
  }, [failed, validationCallback]);

  useEffect(() => {
    if (success.hasOwnProperty("success") && success.success) {
      window.localStorage.setItem("_token", success.data._token);
      window.localStorage.setItem("_id", success.data._id);
      window.localStorage.setItem("isAuth", true);
      new Cookies().set("_token", success.data._token, { path: "/" });
      history.push(HOME_DASHBOARD);
    }
  }, [success]);

  useEffect(() => {
    if (save) {
      switch (method) {
        case "signup":
          signUp(authForm);
          break;
        case "login":
          login(authForm);
          break;
        default:
          return true;
      }
    }
  }, [authForm, save]);

  const onSubmit = () => {
    setSave(true);
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
    success: state[AUTH_STATUS][AUTH_MESSAGE.AUTH_SUCCESS],
    failed: state[AUTH_STATUS][AUTH_MESSAGE.AUTH_FAILED],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (item) => dispatch(signUp(item)),
    login: (item) => dispatch(login(item)),
  };
};

const wrapAuthWrapperWithRouter = withRouter(AuthWrapper);

const AuthWrapperJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(wrapAuthWrapperWithRouter);

export default AuthWrapperJoinRedux;
