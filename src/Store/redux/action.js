import { ADD_ARTICLE } from '../../util/actionTypes';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};