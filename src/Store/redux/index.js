import * as actionTypes from "../../util/actionTypes";
import * as varTypes from "../../util/varTypes";
import slider from "../../util/sliderDummyData";

const initialState = {
  [varTypes.USER]: {},
  [varTypes.AUTH_STATUS]: {
    [varTypes.AUTH_MESSAGE.AUTH_SUCCESS]: {},
    [varTypes.AUTH_MESSAGE.AUTH_FAILED]: "",
  },
  [varTypes.SURVEY_CAN_EDIT]: false,
  [varTypes.SURVEY_EDIT_TYPE_QUESTION]: "",
  [varTypes.SURVEY_TYPE_QUESTION]: "",
  [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
    [varTypes.SURVEY_LIST.SURVEY_LIST_SUCCESS]: {},
    [varTypes.SURVEY_LIST.SURVEY_LIST_ERROR]: {},
    [varTypes.SURVEY_LIST.SURVEY_SUCCESS]: {},
    [varTypes.SURVEY_LIST.SURVEY_ERROR]: {},
    [varTypes.SURVEY_LIST.EDIT_SUCCESS]: {},
    [varTypes.SURVEY_LIST.EDIT_ERROR]: {},
  },
  [varTypes.AUTH_FORM]: {},
  [varTypes.MESSAGE.STATUS]: {},
  [varTypes.LOADER]: false,
  [varTypes.MESSAGE_PROMPT]: false,
  [varTypes.SURVEY_CATEGORY]: slider,
  [varTypes.SURVEY_FORM_BUILDER]: {
    [varTypes.SURVEY_TITLE]: "",
    [varTypes.SURVEY_LOGO]: "",
    [varTypes.SURVEY_CATEGORY]: "",
    [varTypes.SURVEY_HEADER.TITLE]:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt praesentium aperiam ex sapiente accusantium!",
    [varTypes.SURVEY_HEADER.DESC]:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia accusamus adipisci, magni officiis dolore!",
    [varTypes.SURVEY_CATEGORY_BUILDER]: slider[1],
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
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_TITLE]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.FETCH_USER_SUCCESS) {
    const { name, email } = action.payload.data.result;

    return {
      ...state,
      [varTypes.USER]: {
        name,
        email,
      },
      [varTypes.AUTH_STATUS]: {
        ...state[varTypes.AUTH_STATUS],
        [varTypes.AUTH_MESSAGE.AUTH_SUCCESS]: action.payload,
      },
    };
  }
  if (action.type === actionTypes.FETCH_USER_FAILED) {
    return {
      ...state,
      [varTypes.AUTH_STATUS]: {
        ...state[varTypes.AUTH_STATUS],
        [varTypes.AUTH_MESSAGE.AUTH_FAILED]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.SET_AUTH_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      [varTypes.AUTH_FORM]: {
        ...state[varTypes.AUTH_FORM],
        [name]: value,
      },
    };
  }

  if (action.type === actionTypes.LOGIN_SUCCESS) {
    return {
      ...state,
      [varTypes.AUTH_STATUS]: {
        ...state[varTypes.AUTH_STATUS],
        [varTypes.AUTH_MESSAGE.AUTH_SUCCESS]: action.payload,
      },
    };
  }
  if (action.type === actionTypes.LOGIN_FAILED) {
    return {
      ...state,
      [varTypes.AUTH_STATUS]: {
        ...state[varTypes.AUTH_STATUS],
        [varTypes.AUTH_MESSAGE.AUTH_FAILED]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.SIGNUP_SUCCESS) {
    return {
      ...state,
      [varTypes.AUTH_STATUS]: {
        ...state[varTypes.AUTH_STATUS],
        [varTypes.AUTH_MESSAGE.AUTH_SUCCESS]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.SIGNUP_FAILED) {
    return {
      ...state,
      [varTypes.AUTH_STATUS]: {
        ...state[varTypes.AUTH_STATUS],
        [varTypes.AUTH_MESSAGE.AUTH_FAILED]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.TRIGGER_MESSAGE) {
    return {
      ...state,
      [varTypes.MESSAGE_PROMPT]: !state[varTypes.MESSAGE_PROMPT],
    };
  }

  if (action.type === actionTypes.UPDATE_SURVEY_SUCCESS) {
    return state;
  }

  if (action.type === actionTypes.UPDATE_SURVEY_FAILED) {
    return state;
  }

  if (action.type === actionTypes.FETCH_EDIT_SURVEY_SUCCESS) {
    const { _id, title, logo, status, surveyForm } = action.payload.data;
    return {
      ...state,
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        ...state[varTypes.SURVEY_LIST.FETCH_SURVEY_LIST],
        [varTypes.SURVEY_LIST.EDIT_SUCCESS]: {
          success: action.payload.success,
          time: action.payload.time,
          _id,
          status,
        },
      },
      [varTypes.SURVEY_FORM_BUILDER]: {
        [varTypes.SURVEY_TITLE]: title,
        [varTypes.SURVEY_LOGO]: logo,
        [varTypes.SURVEY_CATEGORY]: "",
        [varTypes.SURVEY_HEADER.TITLE]: surveyForm.title,
        [varTypes.SURVEY_HEADER.DESC]: surveyForm.description,
        [varTypes.SURVEY_CATEGORY_BUILDER]: surveyForm.surveyCategoryBuilder,
        [varTypes.SURVEY_FORM_QUESTION]: surveyForm.surveyQuestion,
        [varTypes.SURVEY_FORM_COPIED]: [],
      },
    };
  }

  if (action.type === actionTypes.FETCH_EDIT_SURVEY_FAILED) {
    return state;
  }

  if (action.type === actionTypes.DELETE_SURVEY_SUCCESS) {
    return {
      ...state,
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        ...state[varTypes.SURVEY_LIST.FETCH_SURVEY_LIST],
        [varTypes.SURVEY_LIST.SURVEY_SUCCESS]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.DELETE_SURVEY_FAILED) {
    return {
      ...state,
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        ...state[varTypes.SURVEY_LIST.FETCH_SURVEY_LIST],
        [varTypes.SURVEY_LIST.SURVEY_FAILED]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.SET_MESSAGE_PROMPT) {
    return {
      ...state,
      [varTypes.MESSAGE.STATUS]: action.payload,
    };
  }

  if (action.type === actionTypes.CANCEL_EDIT_CLEAN) {
    return {
      ...state,
      [varTypes.SURVEY_CAN_EDIT]: false,
      [varTypes.SURVEY_EDIT_TYPE_QUESTION]: "",
      [varTypes.SURVEY_TYPE_QUESTION]: "",
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        ...state[varTypes.SURVEY_LIST.FETCH_SURVEY_LIST],
        [varTypes.SURVEY_LIST.EDIT_SUCCESS]: {},
        [varTypes.SURVEY_LIST.EDIT_ERROR]: {},
      },
      [varTypes.SURVEY_FORM_BUILDER]: {
        [varTypes.SURVEY_TITLE]: "",
        [varTypes.SURVEY_LOGO]: "",
        [varTypes.SURVEY_CATEGORY]: "",
        [varTypes.SURVEY_HEADER.TITLE]:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt praesentium aperiam ex sapiente accusantium!",
        [varTypes.SURVEY_HEADER.DESC]:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia accusamus adipisci, magni officiis dolore!",
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
  }

  if (action.type === actionTypes.CLEAN_SURVEY_STATE) {
    return {
      ...state,
      [varTypes.SURVEY_CAN_EDIT]: false,
      [varTypes.SURVEY_EDIT_TYPE_QUESTION]: "",
      [varTypes.SURVEY_TYPE_QUESTION]: "",
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        [varTypes.SURVEY_LIST.SURVEY_LIST_SUCCESS]: {},
        [varTypes.SURVEY_LIST.SURVEY_LIST_ERROR]: {},
        [varTypes.SURVEY_LIST.SURVEY_SUCCESS]: {},
        [varTypes.SURVEY_LIST.SURVEY_ERROR]: {},
        [varTypes.SURVEY_LIST.EDIT_SUCCESS]: {},
        [varTypes.SURVEY_LIST.EDIT_ERROR]: {},
      },
      [varTypes.MESSAGE.STATUS]: {},
      [varTypes.LOADER]: false,
      [varTypes.SURVEY_FORM_BUILDER]: {
        [varTypes.SURVEY_TITLE]: "",
        [varTypes.SURVEY_LOGO]: "",
        [varTypes.SURVEY_CATEGORY]: "",
        [varTypes.SURVEY_HEADER.TITLE]:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt praesentium aperiam ex sapiente accusantium!",
        [varTypes.SURVEY_HEADER.DESC]:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia accusamus adipisci, magni officiis dolore!",
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
  }

  if (action.type === actionTypes.STORE_SURVEY_SUCCESS) {
    return {
      ...state,
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        ...state[varTypes.SURVEY_LIST.FETCH_SURVEY_LIST],
        [varTypes.SURVEY_LIST.SURVEY_SUCCESS]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.STORE_SURVEY_FAILED) {
    return {
      ...state,
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        ...state[varTypes.SURVEY_LIST.FETCH_SURVEY_LIST],
        [varTypes.SURVEY_LIST.SURVEY_FAILED]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.FETCH_SURVEY_SUCCESS) {
    return {
      ...state,
      [varTypes.SURVEY_LIST.FETCH_SURVEY_LIST]: {
        ...state[varTypes.SURVEY_LIST.FETCH_SURVEY_LIST],
        [varTypes.SURVEY_LIST.SURVEY_LIST_SUCCESS]: action.payload,
      },
    };
  }

  if (action.type === actionTypes.FETCH_SURVEY_FAILED) {
    return state;
  }

  if (action.type === actionTypes.PROCESSING_LOGO_SUCCESS) {
    return {
      ...state,
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_LOGO]: action.payload.data.image,
      },
    };
  }

  if (action.type === actionTypes.PROCESSING_LOGO_FAILED) {
    return {
      ...state,
    };
  }

  if (action.type === actionTypes.SET_SURVEY_HEADER) {
    const { title, desc } = action.payload;
    return {
      ...state,
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_HEADER.TITLE]: title,
        [varTypes.SURVEY_HEADER.DESC]: desc,
      },
    };
  }

  if (action.type === actionTypes.SET_EDIT_TYPE_QUESTION) {
    return {
      ...state,
      [varTypes.SURVEY_EDIT_TYPE_QUESTION]: action.payload,
    };
  }

  if (action.type === actionTypes.SET_CAN_EDIT) {
    return {
      ...state,
      [varTypes.SURVEY_CAN_EDIT]: !state[varTypes.SURVEY_CAN_EDIT],
    };
  }

  if (action.type === actionTypes.SET_TYPE_QUESTION) {
    return {
      ...state,
      [varTypes.SURVEY_TYPE_QUESTION]: action.payload,
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
    let newData;
    const title = action.payload.title;

    for (const key of multiChoiceId) {
      const data = newTempData.data.find((item) => item._id === key);
      if (data !== undefined) {
        newArr.push(data);
      }
    }

    newData = data.map((item) => {
      if (item._id === newTempData._id) {
        item = {
          ...item,
          title: title.length > 1 ? title : newTempData.title,
          item: newArr,
        };
      }

      return item;
    });

    return {
      ...state,
      [varTypes.MULTICHOICE.SELF]: {
        [varTypes.MULTICHOICE.MULTICHOICEID]: [],
        [varTypes.MULTICHOICE.INPUTSTATE]: [],
        [varTypes.MULTICHOICE.EDITMULTICHOICE]: {},
      },
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
    let newData = [];

    /**
     * Prorcessing the SHORT COMPONENT
     */
    if (editedData.type === varTypes.TYPE_QUESTION.SHORT) {
      newData = state[varTypes.SURVEY_FORM_BUILDER][
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
    }

    /**
     * Prorcessing the MULTIPLE COMPONENT
     */
    if (editedData.type === varTypes.TYPE_QUESTION.MULTIPLE) {
      const data =
        state[varTypes.SURVEY_FORM_BUILDER][varTypes.SURVEY_FORM_QUESTION];
      const newTempData =
        state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.EDITMULTICHOICE];
      const multiChoiceId =
        state[varTypes.MULTICHOICE.SELF][varTypes.MULTICHOICE.MULTICHOICEID];

      let newArr = [];
      const title = editedData.title;

      for (const key of multiChoiceId) {
        const data = newTempData.data.find((item) => item._id === key);
        if (data !== undefined) {
          newArr.push(data);
        }
      }

      newData = data.map((item) => {
        if (item._id === newTempData._id) {
          item = {
            ...item,
            title: title.length > 1 ? title : newTempData.title,
            item: newArr,
          };
        }

        return item;
      });
    }

    return {
      ...state,
      [varTypes.MULTICHOICE.SELF]: {
        [varTypes.MULTICHOICE.MULTICHOICEID]: [],
        [varTypes.MULTICHOICE.INPUTSTATE]: [],
        [varTypes.MULTICHOICE.EDITMULTICHOICE]: {},
      },
      [varTypes.SURVEY_FORM_BUILDER]: {
        ...state[varTypes.SURVEY_FORM_BUILDER],
        [varTypes.SURVEY_FORM_QUESTION]: newData,
      },
    };
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
