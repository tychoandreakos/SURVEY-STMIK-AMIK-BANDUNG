import React, { useCallback, useEffect, useState } from "react";
import Message from "../../Message";
import { connect } from "react-redux";
import { MESSAGE_PROMPT } from "../../../../util/varTypes";

const WarningMsg = (props) => {
  const { title, messagePrompt } = props;
  const [msg, setMsg] = useState(true);
  const msgCallback = useCallback(() => {
    if (messagePrompt) {
      setTimeout(() => {
        setMsg(false);
      }, 500);
    } else {
      setTimeout(() => {
        setMsg(true);
      }, 500);
    }
  }, [messagePrompt]);

  useEffect(() => {
    msgCallback();
  }, [msgCallback]);
  return <Message show={msg} background='#4ca6e3' title={title} />;
};

const mapStateToProps = (state) => {
  return {
    messagePrompt: state[MESSAGE_PROMPT],
  };
};

const WarningMsgJoinRedux = connect(mapStateToProps)(WarningMsg);

export default WarningMsgJoinRedux;
