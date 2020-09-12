import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import Message from "../../Message";
import { MESSAGE_PROMPT } from "../../../../util/varTypes";

const FailedMsg = (props) => {
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
  return <Message show={msg} background='#ea4c89' title={title} />;
};

const mapStateToProps = (state) => {
  return {
    messagePrompt: state[MESSAGE_PROMPT],
  };
};

const FailedMsgJoinRedux = connect(mapStateToProps)(FailedMsg);

export default FailedMsgJoinRedux;
