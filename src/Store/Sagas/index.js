import { takeLatest, put, call } from "redux-saga/effects";

import * as types from "./types";
import * as actionTypes from "../../util/actionTypes";
import * as api from "../Api";

export default function* rootSaga() {
  yield takeLatest(types.PROCESSING_LOGO, watchProcessingLogo);
  yield takeLatest(types.FETCH_SURVEY, watchFetchSurvey);
  yield takeLatest(types.STORE_SURVEY, watchStoreSurvey);
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

function* watchProcessingLogo(payload) {
  yield put({
    type: actionTypes.SET_SURVEY_LOGO,
    payload: payload,
  });
}
