import * as actionTypes from '../../util/actionTypes';

const initialState = {};

function rootReducer(state = initialState, action) {
    if (action.type === actionTypes.SET_TITLE_SURVEY) {
        return {
            ...state,
            [actionTypes.SET_TITLE_SURVEY]: action.payload
        }
    }

    return state;
};

export default rootReducer;