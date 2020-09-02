import { takeLatest, put, call } from "redux-saga/effects";

import * as types from "./types";
import * as actionTypes from "../../util/actionTypes";

export default function* rootSaga() {
  yield takeLatest(types.PROCESSING_LOGO, watchProcessingLogo);
}

function* watchProcessingLogo(payload) {
  yield put({
    type: actionTypes.SET_SURVEY_LOGO,
    payload: payload,
  });
}
