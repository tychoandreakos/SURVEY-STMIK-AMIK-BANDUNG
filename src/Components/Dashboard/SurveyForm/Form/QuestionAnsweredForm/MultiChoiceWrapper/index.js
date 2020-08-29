import React, { useEffect, useCallback, useState } from "react";

import MultiChoiceV2 from "../../../Form/MultiChoiceV2";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import {
  setMultichoiceID,
  setMultichoiceInputstate,
} from "../../../../../../Store/redux/action";
import { MULTICHOICE } from "../../../../../../util/varTypes";

const MultiChoiceWrapper = (props) => {
  const { inputState, multiChoiceId, setId, setInput } = props;
  const [canRemoveDisabled, setCanRemoveDisabled] = useState(true);

  const memoizedCallback = useCallback(() => {
    const initialize = [uuid()];
    setId(initialize);
    setInput([]);
  }, [setId, setInput]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  useEffect(() => {
    if (multiChoiceId.length <= 1) {
      setCanRemoveDisabled(true);
    }

    if (multiChoiceId.length >= 2) {
      setCanRemoveDisabled(false);
    }

    console.log(multiChoiceId.length)
  }, [multiChoiceId]);

  const inputStateHandler = (val, _id) => {
    const data = [
      {
        ...inputState[0],
        [_id]: {
          ...val,
        },
      },
    ];
    setInput(data);
  };

  const addNewMultiChoice = (_id) => {
    const index = multiChoiceId.findIndex((id) => id === _id);
    const newArray = Array.from(multiChoiceId);
    const start = index + 1;
    if (newArray[start] !== undefined) {
      for (let i = newArray.length; i > index; i--)
        newArray[i] = newArray[i - 1];
      newArray[start] = uuid();
    } else {
      newArray.push(uuid());
    }
    setId(newArray);
  };

  const removeNewMultiChoise = (_id) => {
    if (multiChoiceId.length > 1) {
      const newArr = multiChoiceId.filter((id) => id !== _id);
      setId(newArr);
    }
  };

  const multiChoiceEL = multiChoiceId.map((id) => (
    <MultiChoiceV2
      key={id}
      _id={id}
      canRemoveDisabled={canRemoveDisabled}
      removeNewMultiChoise={removeNewMultiChoise}
      addNewMultiChoice={addNewMultiChoice}
      inputStateHandler={inputStateHandler}
    />
  ));

  return <>{multiChoiceEL}</>;
};

const mapStateToProps = (state) => {
  return {
    inputState: state[MULTICHOICE.SELF][MULTICHOICE.INPUTSTATE],
    multiChoiceId: state[MULTICHOICE.SELF][MULTICHOICE.MULTICHOICEID],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch(setMultichoiceID(id)),
    setInput: (item) => dispatch(setMultichoiceInputstate(item)),
  };
};

const MultiChoiceWrapperJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiChoiceWrapper);

export default MultiChoiceWrapperJoinRedux;
