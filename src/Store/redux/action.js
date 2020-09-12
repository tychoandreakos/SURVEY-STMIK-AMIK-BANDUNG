import * as actionType from "../../util/actionTypes";
import * as sagaType from "../Sagas/types";

// Redux Saga Action
export function processingLogo(payload) {
  return {
    type: sagaType.PROCESSING_LOGO,
    payload,
  };
}

export function editSurvey(payload) {
  return {
    type: sagaType.EDIT_SURVEY,
    payload,
  };
}

export function storeSurvey(payload) {
  return {
    type: sagaType.STORE_SURVEY,
    payload,
  };
}

export function fetchSurvey() {
  return {
    type: sagaType.FETCH_SURVEY,
  };
}

export function deleteSurvey(payload) {
  return {
    type: sagaType.DELETE_SURVEY,
    payload,
  };
}

//
export function setTitleSurvey(payload) {
  return {
    type: actionType.SET_TITLE_SURVEY,
    payload,
  };
}

export function cleanSurveyState() {
  return {
    type: actionType.CLEAN_SURVEY_STATE,
  };
}

export function editSelectedMultiChoice(payload) {
  return {
    type: actionType.EDIT_SELECTED_MULTIPLECHOICE,
    payload,
  };
}

export function setEditMultiChoice(payload) {
  return {
    type: actionType.SET_EDIT_MULTICHOICE,
    payload,
  };
}

export function editMultiChoiceForm(payload) {
  return {
    type: actionType.EDIT_MULTICHOICE_FORM,
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

export function setTypeQuestion(payload) {
  return {
    type: actionType.SET_TYPE_QUESTION,
    payload,
  };
}

export function setSurveyLogo(payload) {
  return {
    type: actionType.SET_SURVEY_LOGO,
    payload,
  };
}

export function setSurveyHeader(payload) {
  return {
    type: actionType.SET_SURVEY_HEADER,
    payload,
  };
}

export function editSurveyForm(payload) {
  return {
    type: actionType.EDIT_SURVEY_FORM,
    payload,
  };
}

export function setTypeEditQuestion(payload) {
  return {
    type: actionType.SET_EDIT_TYPE_QUESTION,
    payload,
  };
}

export function deleteSurveyForm(payload) {
  return {
    type: actionType.DELETE_SURVEY_FORM,
    payload,
  };
}

export function setCanEdit() {
  return {
    type: actionType.SET_CAN_EDIT,
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
