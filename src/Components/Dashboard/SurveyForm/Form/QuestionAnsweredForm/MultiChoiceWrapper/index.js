import React, { useEffect, useCallback, useState } from "react";

import MultiChoiceV2 from "../../../Form/MultiChoiceV2";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import {
  setMultichoiceID,
  setMultichoiceInputstate,
  setEditMultiChoice,
} from "../../../../../../Store/redux/action";
import { MULTICHOICE } from "../../../../../../util/varTypes";

const MultiChoiceWrapper = (props) => {
  const {
    inputState,
    multiChoiceId,
    setId,
    setInput,
    editResult,
    editData,
    setEditData,
  } = props;
  const [canRemoveDisabled, setCanRemoveDisabled] = useState(true);

  const memoizedCallback = useCallback(() => {
    let initialize = [];
    if (editResult && editResult.index && editResult.data) {
      for (const item of editResult.data) {
        initialize = [...initialize, item._id];
      }
    } else {
      initialize = [uuid()];
    }
    setId(initialize);
    setInput([]);
  }, [setId, setInput, editResult]);

  const editDataCallback = useCallback(() => {
    if (editResult && editResult.index) {
      setEditData(editResult);
    }
  }, [editResult, setEditData]);

  useEffect(() => {
    editDataCallback();
  }, [editDataCallback]);

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

  const editStateHandler = (val, _id) => {
    const newData = editData.data.map((item) => {
      if (item._id === val._id) {
        item = {
          ...item,
          title: val.title,
          selected: val.selected,
        };
      }
      return item;
    });

    if (editData.data.find((item) => item._id !== val._id)) {
      newData.push(val);
    }

    setEditData({
      ...editData,
      data: newData,
    });
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

  const findResultDataID = (id) => {
    const item = editData.data.find((item) => item._id === id);
    return item ? item._id : id;
  };

  const findResultDataTitle = (id) => {
    const item = editData.data.find((item) => item._id === id);
    return item ? item.title : "";
  };

  let multiChoiceEL;
  if (multiChoiceId && editData && editData.data) {
    multiChoiceEL = multiChoiceId.map((id) => (
      <MultiChoiceV2
        key={findResultDataID(id)}
        _id={findResultDataID(id)}
        parentId={editData._id}
        title={findResultDataTitle(id)}
        canRemoveDisabled={canRemoveDisabled}
        removeNewMultiChoise={removeNewMultiChoise}
        addNewMultiChoice={addNewMultiChoice}
        editStateHandler={editStateHandler}
        edit={true}
      />
    ));
  } else {
    multiChoiceEL = multiChoiceId.map((id) => (
      <MultiChoiceV2
        key={id}
        _id={id}
        canRemoveDisabled={canRemoveDisabled}
        removeNewMultiChoise={removeNewMultiChoise}
        addNewMultiChoice={addNewMultiChoice}
        inputStateHandler={inputStateHandler}
        edit={false}
      />
    ));
  }

  return <>{multiChoiceEL}</>;
};

const mapStateToProps = (state) => {
  return {
    inputState: state[MULTICHOICE.SELF][MULTICHOICE.INPUTSTATE],
    multiChoiceId: state[MULTICHOICE.SELF][MULTICHOICE.MULTICHOICEID],
    editData: state[MULTICHOICE.SELF][MULTICHOICE.EDITMULTICHOICE],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch(setMultichoiceID(id)),
    setInput: (item) => dispatch(setMultichoiceInputstate(item)),
    setEditData: (item) => dispatch(setEditMultiChoice(item)),
  };
};

const MultiChoiceWrapperJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiChoiceWrapper);

export default MultiChoiceWrapperJoinRedux;
