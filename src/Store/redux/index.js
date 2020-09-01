import * as actionTypes from "../../util/actionTypes";
import * as varTypes from "../../util/varTypes";
import slider from "../../util/sliderDummyData";

const initialState = {
  [varTypes.LOADER]: false,
  [varTypes.SURVEY_CATEGORY]: slider,
  [varTypes.SURVEY_FORM_BUILDER]: {
    title: "",
    [varTypes.SURVEY_CATEGORY_BUILDER]: {},
    [varTypes.SURVEY_FORM_QUESTION]: [],
    [varTypes.SURVEY_FORM_COPIED]: [],
  },
  [varTypes.MULTICHOICE.SELF]: {
    [varTypes.MULTICHOICE.MULTICHOICEID]: [],
    [varTypes.MULTICHOICE.INPUTSTATE]: [],
    [varTypes.MULTICHOICE.EDITMULTICHOICE]: {},
  },
};

function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.SET_TITLE_SURVEY) {
    return {
      ...state,
      [varTypes.SURVEY_TITLE]: action.payload,
    };
  }

  if (action.type === actionTypes.TRIGGER_LOADER) {
    return {
      ...state,
      [varTypes.LOADER]: !state[varTypes.LOADER],
    };
  }

  if (action.type === actionTypes.SET_MULTICHOICE_INPUTSTATE) {
    return {
      ...state,
      [varTypes.MULTICHOICE.SELF]: {
        ...state[varTypes.MULTICHOICE.SELF],
        [varTypes.MULTICHOICE.INPUTSTATE]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.SET_EDIT_MULTICHOICE) {
    return {
      ...state,
      [varTypes.MULTICHOICE.SELF]: {
        ...state[varTypes.MULTICHOICE.SELF],
        [varTypes.MULTICHOICE.EDITMULTICHOICE]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.EDIT_MULTICHOICE_FORM) {
    const data =
      state[varTypes.SURVEY_FORM_BUILDER][varTypes.SURVEY_FORM_QUESTION];
    const newTempData =
      state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.EDITMULTICHOICE];
    const multiChoiceId =
      state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.MULTICHOICEID];

    let newArr = [];
    for (const key of multiChoiceId) {
      const data = newTempData.data.find((item) => item._id === key);
      if (data !== undefined) {
        newArr.push(data);
      }
    }

    const newData = data.map((item) => {
      if (item._id === newTempData._id) {
        item = {
          ...item,
          title: newTempData.title,
          item: newArr,
        };
      }

      return item;
    });

    return {
      ...state,
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_FORM_QUESTION]: newData,
      },
    };
  }

  if (action.type === actionTypes.SET_MULTICHOICE_ID) {
    return {
      ...state,
      [varTypes.MULTICHOICE.SELF]: {
        ...state[varTypes.MULTICHOICE.SELF],
        [varTypes.MULTICHOICE.MULTICHOICEID]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.COPIED_SURVEY_FORM) {
    return {
      ...state,
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_FORM_COPIED]: [...action.payload],
      },
    };
  }

  if (action.type === actionTypes.SAVE_SINGLETEXTBOX_STATE) {
    const { title, _id, type } = action.payload;
    const result = {
      _id,
      title,
      type,
    };

    return {
      ...state,
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_FORM_QUESTION]: [
          ...state[varTypes.SURVEY_FORM_BUILDER][varTypes.SURVEY_FORM_QUESTION],
          result,
        ],
      },
    };
  }

  if (action.type === actionTypes.DELETE_SURVEY_FORM) {
    const deletedData = action.payload;
    if (deletedData.type === varTypes.TYPE_QUESTION.SHORT) {
      const newArrData = state[varTypes.SURVEY_FORM_BUILDER][
        varTypes.SURVEY_FORM_QUESTION
      ].filter((item) => item._id !== deletedData._id);
      return {
        ...state,
        [varTypes.SURVEY_FORM_BUILDER]: {
          ...state[varTypes.SURVEY_FORM_BUILDER],
          [varTypes.SURVEY_FORM_QUESTION]: [...newArrData],
        },
      };
    }
  }

  if (action.type === actionTypes.EDIT_SURVEY_FORM) {
    const editedData = action.payload;
    if (editedData.type === varTypes.TYPE_QUESTION.SHORT) {
      const newArrData = state[varTypes.SURVEY_FORM_BUILDER][
        varTypes.SURVEY_FORM_QUESTION
      ].map((item) => {
        if (item._id === editedData._id) {
          item = {
            ...item,
            ...editedData,
          };
        }
        return item;
      });
      return {
        ...state,
        [varTypes.SURVEY_FORM_BUILDER]: {
          ...state[varTypes.SURVEY_FORM_BUILDER],
          [varTypes.SURVEY_FORM_QUESTION]: newArrData,
        },
      };
    }
  }

  if (action.type === actionTypes.SAVE_MULTICHOICE_STATE) {
    const inputState =
      state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.INPUTSTATE];
    const multiChoiceId =
      state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.MULTICHOICEID];
    const { title, _id, type } = action.payload;

    const [inputObj] = inputState;
    let newArr = [];
    for (const key of multiChoiceId) {
      if (inputObj[key] !== undefined) {
        newArr.push(inputObj[key]);
      }
    }
    const result = {
      _id,
      title,
      type,
      item: newArr,
    };

    return {
      ...state,
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_FORM_QUESTION]: [
          ...state[varTypes.SURVEY_FORM_BUILDER][varTypes.SURVEY_FORM_QUESTION],
          result,
        ],
      },
    };
  }

  if (action.type === actionTypes.SET_SURVEY_CATEGORY) {
    let data;
    const newSurvey = state[varTypes.SURVEY_CATEGORY].map((item) => {
      if (item.active) item.active = false;
      if (item._id === action.payload) {
        item.active = true;
        data = item;
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
          ...data,
        },
      },
    };
  }

  return state;
}

export default rootReducer;
