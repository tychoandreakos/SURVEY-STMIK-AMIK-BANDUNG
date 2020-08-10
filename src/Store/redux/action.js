import * as actionType from '../../util/actionTypes';

export function setTileSurvey(payload) {
    return {
        type: actionType.SET_TITLE_SURVEY,
        payload
    }
}

export function setSurveyCategory(payload) {
    return {
        type: actionType.SET_SURVEY_CATEGORY,
        payload
    }
}