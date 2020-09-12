import React, { useCallback, useEffect, useState } from "react";
import Message from "../../Message";
import { connect } from "react-redux";
import { MESSAGE_PROMPT } from "../../../../util/varTypes";

const SuccessMsg = (props) => {
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
  return <Message show={msg} background='#5661b6' title={title} />;
};

const mapStateToProps = (state) => {
  return {
    messagePrompt: state[MESSAGE_PROMPT],
  };
};

const SuccessMsgJoinRedux = connect(mapStateToProps)(SuccessMsg);

export default SuccessMsgJoinRedux;
