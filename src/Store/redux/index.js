import * as actionTypes from '../../util/actionTypes';
import * as varTypes from '../../util/varTypes';
import slider from '../../util/sliderDummyData'

const initialState = {
    [varTypes.SURVEY_CATEGORY]: slider,
    [varTypes.SURVEY_FORM_BUILDER]: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === actionTypes.SET_TITLE_SURVEY) {
        return {
            ...state,
            [varTypes.SURVEY_TITLE]: action.payload
        }
    }

    if (action.type === actionTypes.SET_SURVEY_CATEGORY) {
        let data;
        const newSurvey = state[varTypes.SURVEY_CATEGORY].map(item => {
            if (item.active) item.active = false
            if (item._id === action.payload) {
                item.active = true
                data = item
            }
            return item;
        });


        return {
            ...state,
            [varTypes.SURVEY_CATEGORY]: newSurvey,
            [varTypes.SURVEY_FORM_BUILDER]: {
                title: state[actionTypes.SET_TITLE_SURVEY],
                [varTypes.SURVEY_CATEGORY_BUILDER]: {
                    ...data
                }
            }
        };
    }

    return state;
};

export default rootReducer;