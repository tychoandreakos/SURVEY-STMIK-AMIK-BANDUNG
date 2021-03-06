import { takeLatest, put, call } from "redux-saga/effects";

import * as types from "./types";
import * as actionTypes from "../../util/actionTypes";
import * as api from "../Api";

export default function* rootSaga() {
  yield takeLatest(types.PROCESSING_LOGO, watchProcessingLogo);
  yield takeLatest(types.FETCH_SURVEY, watchFetchSurvey);
  yield takeLatest(types.STORE_SURVEY, watchStoreSurvey);
  yield takeLatest(types.DELETE_SURVEY, watchDeleteSurvey);
  yield takeLatest(types.EDIT_SURVEY, watchEditSurvey);
  yield takeLatest(types.UPDATE_SURVEY, watchUpdateSurvey);
  yield takeLatest(types.SIGNUP, watchSignup);
  yield takeLatest(types.FETCH_USER, watchFetchUser);
  yield takeLatest(types.LOGIN, watchLogin);
}

function* watchFetchUser(action) {
  try {
    const { data } = yield call(api.fetchUser, action.payload);
    yield put({
      type: actionTypes.FETCH_USER_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.FETCH_USER_FAILED,
      payload: e.message,
    });
  }
}

function* watchLogin(action) {
  try {
    const { data } = yield call(api.login, action.payload);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.LOGIN_FAILED,
      payload: e.message,
    });
  }
}

function* watchSignup(action) {
  try {
    const { data } = yield call(api.signUp, action.payload);
    yield put({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.SIGNUP_FAILED,
      payload: e.message,
    });
  }
}

function* watchDeleteSurvey(action) {
  try {
    const { data } = yield call(api.deleteSurvey, action.payload);
    yield put({
      type: actionTypes.DELETE_SURVEY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.DELETE_SURVEY_FAILED,
      payload: e.message,
    });
  }
}

function* watchUpdateSurvey(action) {
  try {
    const { data } = yield call(api.updateSurvey, action.payload);
    yield put({
      type: actionTypes.UPDATE_SURVEY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.UPDATE_SURVEY_FAILED,
      payload: e.message,
    });
  }
}

function* watchEditSurvey(action) {
  try {
    const { data } = yield call(api.editSurvey, action.payload);
    yield put({
      type: actionTypes.FETCH_EDIT_SURVEY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.FETCH_EDIT_SURVEY_FAILED,
      payload: e.message,
    });
  }
}

function* watchFetchSurvey() {
  try {
    const { data } = yield call(api.fetchSurvey);
    yield put({
      type: actionTypes.FETCH_SURVEY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.FETCH_SURVEY_FAILED,
      payload: e.message,
    });
  }
}

function* watchStoreSurvey(action) {
  try {
    const { data } = yield call(api.storeSurvey, action.payload);
    yield put({
      type: actionTypes.STORE_SURVEY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.STORE_SURVEY_FAILED,
      payload: e.message,
    });
  }
}

function* watchProcessingLogo(action) {
  try {
    const { data } = yield call(api.processingImage, action.payload);
    yield put({
      type: actionTypes.PROCESSING_LOGO_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.PROCESSING_LOGO_FAILED,
      payload: e.message,
    });
  }
}
