import React, { useState, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Icon from "@iconify/react";
import Edit from "@iconify/icons-mdi/edit-outline";
import Share from "@iconify/icons-mdi/share-circle";
import Copy from "@iconify/icons-mdi/layers";
import Delete from "@iconify/icons-mdi/trash-can";
import Dialog from "../../Dialog";
import { EDIT_SURVEY_FORM } from "../../../../util/route";
import Trash from "@iconify/icons-mdi/trash";

import {
  deleteSurvey,
  editSurvey,
} from "../../../../Store/redux/action";

import "./style.scss";

const DropdownSurveyList = (props) => {
  const [dialog, setDialog] = useState(false);
  const {
    dropdownHandler,
    onDelete,
    onDeleteAnim,
    _id,
    onEdit,
    history,
  } = props;

  const dialogHandler = useCallback(() => {
    setDialog(!dialog);
  }, [dialog]);

  const editHandler = useCallback(() => {
    if (_id.length > 1) {
      onEdit(_id);
      setTimeout(() => {
        history.push(EDIT_SURVEY_FORM);
      }, 1500);
    }
  }, [_id, history, onEdit]);

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
  }, [dialogHandler, editHandler]);

  const disabledDropdownHandler = () => {
    dropdownHandler();
  };

  function copyHandler() {}

  function shareHandler() {}

  function deleteHandler() {
    if (_id.length > 1) {
      onCancelHandler();
      onDeleteAnim();
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
      desc='Are you sure want to delete this survey? your data will never comeback.'
      icon={Trash}
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
    onEdit: (id) => dispatch(editSurvey(id)),
  };
};

const mapRoutertoProps = withRouter(DropdownSurveyList);

const DropdownSurveyListJoinRedux = connect(
  null,
  mapDispatchToProps
)(mapRoutertoProps);

export default DropdownSurveyListJoinRedux;
