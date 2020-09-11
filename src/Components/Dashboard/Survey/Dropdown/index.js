import React, { useState, useMemo, useCallback } from "react";
import { connect } from "react-redux";

import Icon from "@iconify/react";
import Edit from "@iconify/icons-mdi/edit-outline";
import Share from "@iconify/icons-mdi/share-circle";
import Copy from "@iconify/icons-mdi/layers";
import Delete from "@iconify/icons-mdi/trash-can";
import Dialog from "../../Dialog";

import { deleteSurvey, cleanSurveyState } from "../../../../Store/redux/action";

import "./style.scss";

const DropdownSurveyList = (props) => {
  const [dialog, setDialog] = useState(false);
  const { dropdownHandler, onDelete, _id } = props;
  const dialogHandler = useCallback(() => {
    setDialog(!dialog);
  }, [dialog]);

  const dropdown = useMemo(() => {
    return [
      {
        icon: Edit,
        title: "Edit",
        method: editHandler,
      },
      {
        icon: Share,
        title: "Share",
        method: shareHandler,
      },
      {
        icon: Copy,
        title: "Make a Copy",
        method: copyHandler,
      },
      {
        icon: Delete,
        title: "Delete",
        method: dialogHandler,
      },
    ];
  }, [dialogHandler]);

  const disabledDropdownHandler = () => {
    dropdownHandler();
  };

  function copyHandler() {}

  function editHandler() {}

  function shareHandler() {}

  function deleteHandler() {
    if (_id.length > 1) {
      onCancelHandler();
      onDelete(_id);
    }
  }

  function onCancelHandler() {
    dialogHandler();
    disabledDropdownHandler();
  }

  const dropdownRender = dropdown.map((item, index) => (
    <li key={index} onClick={item.method}>
      <div className='icon'>
        <Icon icon={item.icon} />
      </div>
      <span>{item.title}</span>
    </li>
  ));

  const renderDialog = dialog ? (
    <Dialog
      onCancelHandler={onCancelHandler}
      title='Yes, Delete'
      onConfirmHandler={deleteHandler}
    />
  ) : undefined;

  return (
    <>
      <ul className='survey-list-dropdown'>{dropdownRender}</ul>
      <div
        onClick={disabledDropdownHandler}
        className='backdrop-survey-list'
      ></div>
      {renderDialog}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteSurvey(id)),
  };
};

const DropdownSurveyListJoinRedux = connect(
  null,
  mapDispatchToProps
)(DropdownSurveyList);

export default DropdownSurveyListJoinRedux;
