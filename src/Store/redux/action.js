import { ADD_ARTICLE, SET_TITLE_SURVEY } from '../../util/actionTypes';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function setTileSurvey(payload) {
    return {
        type: SET_TITLE_SURVEY,
        payload
    }
}