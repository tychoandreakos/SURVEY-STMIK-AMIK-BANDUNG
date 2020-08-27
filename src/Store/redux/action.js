import * as actionType from "../../util/actionTypes";

export function setTitleSurvey(payload) {
  return {
    type: actionType.SET_TITLE_SURVEY,
    payload,
  };
}

export function triggerLoader() {
  return {
    type: actionType.TRIGGER_LOADER,
  };
}

export function copiedSurveyForm(payload) {
  return {
    type: actionType.COPIED_SURVEY_FORM,
    payload,
  };
}

export function editSurveyForm(payload) {
  return {
    type: actionType.EDIT_SURVEY_FORM,
    payload,
  };
}

export function deleteSurveyForm(payload) {
  return {
    type: actionType.DELETE_SURVEY_FORM,
    payload,
  };
}

export function setMultichoiceID(payload) {
  return {
    type: actionType.SET_MULTICHOICE_ID,
    payload,
  };
}

export function setMultichoiceInputstate(payload) {
  return {
    type: actionType.SET_MULTICHOICE_INPUTSTATE,
    payload,
  };
}

export function saveSingleTextBoxState(payload) {
  return {
    type: actionType.SAVE_SINGLETEXTBOX_STATE,
    payload,
  };
}

export function saveMultichoiceState(payload) {
  return {
    type: actionType.SAVE_MULTICHOICE_STATE,
    payload,
  };
}

export function setSurveyCategory(payload) {
  return {
    type: actionType.SET_SURVEY_CATEGORY,
    payload,
  };
}
