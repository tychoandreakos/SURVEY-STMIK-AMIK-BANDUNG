import * as actionTypes from '../../util/actionTypes';
import * as varTypes from '../../util/varTypes';
import slider from '../../util/sliderDummyData'


const initialState = {
    [varTypes.SURVEY_CATEGORY]: slider,
    [varTypes.SURVEY_FORM_BUILDER]: {
        title: "",
        [varTypes.SURVEY_CATEGORY_BUILDER]: {},
        [varTypes.SURVEY_FORM_QUESTION]: []
    },
    [varTypes.MULTICHOICE.SELF]: {
        [varTypes.MULTICHOICE.MULTICHOICEID]: [],
        [varTypes.MULTICHOICE.INPUTSTATE]: [],
    }
};

function rootReducer(state = initialState, action) {
    if (action.type === actionTypes.SET_TITLE_SURVEY) {
        return {
            ...state,
            [varTypes.SURVEY_TITLE]: action.payload
        }
    }

    if (action.type === actionTypes.SET_MULTICHOICE_INPUTSTATE) {
        return {
            ...state,
            [varTypes.MULTICHOICE.SELF]: {
                ...state[varTypes.MULTICHOICE.SELF],
                [varTypes.MULTICHOICE.INPUTSTATE]: action.payload
            }
        }
    }

    if (action.type === actionTypes.SET_MULTICHOICE_ID) {
        return {
            ...state,
            [varTypes.MULTICHOICE.SELF]: {
                ...state[varTypes.MULTICHOICE.SELF],
                [varTypes.MULTICHOICE.MULTICHOICEID]: action.payload
            }
        }
    }

    if (action.type === actionTypes.SAVE_SINGLETEXTBOX_STATE) {
        const { title, _id, type } = action.payload;
        const result = {
            _id,
            title,
            type,
        }

        return {
            ...state,
            [varTypes.SURVEY_FORM_BUILDER]: {
                ...state[varTypes.SURVEY_FORM_BUILDER],
                [varTypes.SURVEY_FORM_QUESTION]: [
                    ...state[varTypes.SURVEY_FORM_BUILDER][varTypes.SURVEY_FORM_QUESTION],
                    result
                ]
            }
        }
    }

    if (action.type === actionTypes.EDIT_SURVEY_FORM) {
        // if (action.type === varTypes.TYPE_QUESTION.SHORT) {
        //     return {
        //         ...state,

        //     }
        // }

        console.log("its working");
        return state;
    }

    if (action.type === actionTypes.SAVE_MULTICHOICE_STATE) {
        const inputState = state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.INPUTSTATE];
        const multiChoiceId = state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.MULTICHOICEID];
        const { title, _id, type } = action.payload;

        const [inputObj] = inputState;
        let newArr = []
        for (const key of multiChoiceId) {
            if (inputObj[key] !== undefined) {
                newArr.push(inputObj[key])
            }
        }
        const result = {
            _id,
            title,
            type,
            item: newArr
        }


        return {
            ...state,
            [varTypes.SURVEY_FORM_BUILDER]: {
                ...state[varTypes.SURVEY_FORM_BUILDER],
                [varTypes.SURVEY_FORM_QUESTION]: [
                    ...state[varTypes.SURVEY_FORM_BUILDER][varTypes.SURVEY_FORM_QUESTION],
                    result
                ]
            }
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
                ...state[varTypes.SURVEY_FORM_BUILDER],
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